import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Translate from "react-translate-component";
import cookies from "cookies-js";
import SettingsStore from "stores/SettingsStore";

/**
 * @brief Allows the user to enter a referral code
 */

class RefcodeInput extends React.Component {
    static propTypes = {
        label: PropTypes.string.isRequired, // a translation key for the label
        placeholder: PropTypes.string, // the placeholder text to be displayed when there is no user_input
        action_label: PropTypes.string, // the placeholder text to be displayed when there is no user_input
        tabIndex: PropTypes.number, // tabindex property to be passed to input tag
        allow_claim_to_account: PropTypes.string // show claim button and allow to claim to specified account
    };

    constructor(props) {
        super(props);
        let refcode_match = window.location.hash.match(/refcode\=([\w\d]+)/);
        let value = refcode_match ? refcode_match[1] : cookies.get("_refcode_");
        this.state = {
            value,
            description_text: "",
            error: null
        };
    }

    value() {
        return this.state.value;
    }

    clear() {
        this.setState({value: ""});
    }

    setBonusDescription(value) {
        switch (value.slice(0, 3)) {
            case "BON":
                this.setState({
                    description_text: "refcode.bonus_description",
                    error: null
                });
                break;
            case "REF":
                this.setState({
                    description_text: "refcode.referral_description",
                    error: null
                });
                break;
            case "PRE":
                this.setState({
                    description_text: "refcode.premium_description",
                    error: null
                });
                break;
            default:
                this.setState({
                    description_text: "refcode.other_description",
                    error: null
                });
                break;
        }
    }

    onInputChanged(event) {
        let value = event.target.value.trim();
        this.setBonusDescription(value);
        this.setState({value, error: null});
    }

    onKeyDown(event) {
        if (event.keyCode === 13) this.onClaim(event);
    }

    onClaim(event) {
        event.preventDefault();
        let faucet_address = SettingsStore.getSetting("faucet_address");
        console.log(
            "-- RefcodeInput.onClaim -->",
            this.state.value,
            faucet_address
        );
        let claim_url = `${SettingsStore.getSetting(
            "faucet_address"
        )}/api/v1/referral_codes/${this.state.value}/claim?account=${
            this.props.allow_claim_to_account
        }`;
        fetch(claim_url, {
            method: "get",
            mode: "cors",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json"
            }
        })
            .then(r => r.json())
            .then(res => {
                if (res.error) {
                    this.setState({error: res.error});
                } else {
                    console.log("-- RefcodeInput claimed -->", res);
                    this.clear();
                    // TODO: show success notification
                }
                cookies.set("_refcode_", null);
            })
            .catch(error => {
                console.error("-- RefcodeInput.onClaim fetch error -->", error);
                this.setState({error: "Unknown error"});
            });
    }

    isValidRefcode() {
        return true;
    }

    render() {
        let error = this.state.error;
        const {value = "", description_text} = this.state;
        if (!error && !this.isValidRefcode(this.props.value))
            error = "Not a valid referral code";
        let action_class = classnames("button", {disabled: !!error});
        if (value.length && !description_text.length)
            this.setBonusDescription(value);
        return (
            <div className="refcode-input">
                <label>
                    <Translate component="label" content={this.props.label} />
                </label>
                <span className="inline-label">
                    <input
                        type="text"
                        ref="refcode_input"
                        value={this.state.value}
                        onChange={this.onInputChanged.bind(this)}
                        onKeyDown={this.onKeyDown.bind(this)}
                        tabIndex={this.props.tabIndex}
                        autoComplete="off"
                    />
                    {this.props.allow_claim_to_account ? (
                        <button
                            className={action_class}
                            onClick={this.onClaim.bind(this)}
                        >
                            <Translate content={this.props.action_label} />
                        </button>
                    ) : null}
                </span>
                {this.state.description_text ? (
                    <span>
                        <Translate content={this.state.description_text} />
                    </span>
                ) : null}
                <div className="has-error" style={{padding: "0.6rem 0 0 0"}}>
                    <span>{error}</span>
                </div>
            </div>
        );
    }
}
export default RefcodeInput;
