import {
    IAppConfig,
    ISubscriptionPageAppConfig,
    TPlatform
} from '@shared/constants/apps-config/interfaces/app-list.interface'

export interface IPlatformGuideProps {
    getAppsForPlatform: (platform: TPlatform) => IAppConfig[]
    getSelectedAppForPlatform: (platform: TPlatform) => IAppConfig | null
    openDeepLink: (urlScheme: string, isNeedBase64Encoding: boolean | undefined) => void
    appsConfig: ISubscriptionPageAppConfig['platforms']
}
