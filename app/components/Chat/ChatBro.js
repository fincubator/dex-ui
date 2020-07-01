import React from "react";
import SettingsStore from "stores/SettingsStore";
import PropTypes from "prop-types";

/**
 *  Wrapper component for chatbro iframe
 *
 */
class ChatBro extends React.Component {
    render() {
        let frameHeight = this.props.height || "30%";

        let currentLocale = SettingsStore.getState().settings.get("locale");

        let chatUrl = null;
        switch (currentLocale) {
            default:
                chatUrl = `https://www.chatbro.com/${currentLocale}/068DH/`;
                break;
        }

        return (
            <iframe
                style={{height: frameHeight, width: "100%"}}
                src={chatUrl}
                sandbox="allow-same-origin allow-forms allow-scripts allow-popups"
            />
        );
    }
}

ChatBro.propTypes = {
    height: PropTypes.string
};

export default ChatBro;
