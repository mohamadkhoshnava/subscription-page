import { GetSubscriptionInfoByShortUuidCommand } from '@remnawave/backend-contract'
import { useEffect, useLayoutEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

import { useSubscriptionInfoStoreActions } from '@entities/subscription-info-store/subscription-info-store'
import { LoadingScreen } from '@shared/ui/loading-screen/loading-screen'

import classes from './root.module.css'
import i18n from '../../i18n/i18n'

export function RootLayout() {
    const actions = useSubscriptionInfoStoreActions()
    const [i18nInitialized, setI18nInitialized] = useState(i18n.isInitialized)

    useLayoutEffect(() => {
        const rootDiv = document.getElementById('root')

        if (rootDiv) {
            const subscriptionUrl = rootDiv.dataset.panel

            if (subscriptionUrl) {
                const subscription: GetSubscriptionInfoByShortUuidCommand.Response = JSON.parse(
                    atob(subscriptionUrl)
                )

                actions.setSubscriptionInfo({
                    subscription: subscription.response
                })
            }

            // Set default language if no language is stored in localStorage
            const defaultLanguage = rootDiv.dataset.defaultLanguage
            if (defaultLanguage && ['en', 'fa', 'ru'].includes(defaultLanguage)) {
                const storedLanguage = localStorage.getItem('i18nextLng')
                if (!storedLanguage) {
                    i18n.changeLanguage(defaultLanguage)
                }
            }
        }
    }, [])

    useEffect(() => {
        if (!i18nInitialized) {
            i18n.on('initialized', () => {
                setI18nInitialized(true)
            })
        }
    }, [i18nInitialized])

    if (!i18nInitialized) {
        return <LoadingScreen height="100vh" />
    }

    return (
        <div className={classes.root}>
            <div className={classes.content}>
                <main className={classes.main}>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}
