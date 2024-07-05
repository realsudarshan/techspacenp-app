/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly botId: string;
    readonly hostUrl: string;
    readonly messagingUrl: string;
    readonly clientId: string;
    readonly webhookId: string;
    readonly lazySocket: boolean;
    readonly botName: string;
    readonly avatarUrl: string;
    readonly phoneNumber: string;
    readonly emailAddress: string;
    readonly stylesheet: string;
    readonly frontendVersion: string;
    readonly useSessionStorage: boolean;
    readonly showBotInfoPage: boolean;
    readonly enableConversationDeletion: boolean;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  