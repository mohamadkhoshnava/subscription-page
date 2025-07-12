## Remnawave Subscription Page

Learn more about Remnawave [here](https://remna.st/).

## Environment Variables

The following environment variables can be configured:

- `REMNAWAVE_PANEL_URL` - The URL of the Remnawave panel (required)
- `META_TITLE` - Meta title for the subscription page (required)
- `META_DESCRIPTION` - Meta description for the subscription page (required)
- `DEFAULT_LANGUAGE` - Default language for the subscription page (optional, defaults to 'en')
  - Supported values: `en` (English), `fa` (Persian/Farsi), `ru` (Russian)
- `APP_PORT` - Port for the application to run on (optional, defaults to 3010)
- `CUSTOM_SUB_PREFIX` - Custom subdomain prefix (optional)
- `MARZBAN_LEGACY_LINK_ENABLED` - Enable Marzban legacy link support (optional, defaults to false)
- `MARZBAN_LEGACY_SECRET_KEY` - Secret key for Marzban legacy links (required if MARZBAN_LEGACY_LINK_ENABLED is true)
- `REMNAWAVE_API_TOKEN` - API token for Remnawave (required if MARZBAN_LEGACY_LINK_ENABLED is true)
- `MARZBAN_LEGACY_SUBSCRIPTION_VALID_FROM` - Valid from date for Marzban legacy subscriptions (optional)
- `CADDY_AUTH_API_TOKEN` - Caddy auth API token (optional)

### Example .env file:

```env
REMNAWAVE_PANEL_URL=https://your-panel.example.com
META_TITLE="Your Subscription Page"
META_DESCRIPTION="Access your subscription"
DEFAULT_LANGUAGE=fa
APP_PORT=3010
```

# Contributors

Check [open issues](https://github.com/remnawave/subscription-page/issues) to help the progress of this project.

<p align="center">
Thanks to the all contributors who have helped improve Remnawave:
</p>
<p align="center">
<a href="https://github.com/remnawave/subscription-page/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=remnawave/subscription-page" />
</a>
</p>
