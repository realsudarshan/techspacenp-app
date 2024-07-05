import React, { useEffect } from "react";

declare global {
  interface Window {
    botpressWebChat: any;
  }
}

export const Bot : React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
        window.botpressWebChat.init({
            "composerPlaceholder": "enter the message",
            "botConversationDescription": "customer support",
            "botId": "0a14308d-2da5-4d32-b6c3-e752f17af83c",
            "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
            "messagingUrl": "https://messaging.botpress.cloud",
            "clientId": "0a14308d-2da5-4d32-b6c3-e752f17af83c",
            "webhookId": "6ac066a7-ed8b-421e-812e-2bd705420945",
            "lazySocket": true,
            "themeName": "prism",
            "botName": "Techspace",
            "avatarUrl": "https://www.shutterstock.com/image-vector/chatbot-icon-concept-chat-bot-600nw-2132342911.jpg",
            "phoneNumber": "+977-9825506216",
            "termsConditions": "do not use for illegal works",
            "emailAddress": "developersaroj326@gmail.com",
            "stylesheet": "https://webchat-styler-css.botpress.app/prod/37832093-bb93-48b9-980a-795966b085a9/v45618/style.css",
            "frontendVersion": "v1",
            "useSessionStorage": true,
            "showBotInfoPage": true,
            "enableConversationDeletion": true,
            "theme": "prism",
            "themeColor": "#2563eb"
        });
    };
  }, []);

  return <div id="webchat" />;
};

