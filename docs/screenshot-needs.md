# Screenshot Needs — Manual Capture Required

This document lists all guide screenshots that **cannot be fetched automatically** and need to be captured manually from a real device or app. Once captured, save them to the specified path under `public/guides/` and add the `image` field to the corresponding item in `src/lib/guides.ts`.

## Source Link Status

| Source | URL | Status |
|---|---|---|
| Alipay+ Consumer | https://www.alipayplus.com/consumer | ✅ Accessible |
| WeChat Pay Official | https://pay.weixin.qq.com/index.php/public/wechatpay_en | ✅ Accessible (merchant platform) |
| Apple eSIM Setup Guide | https://support.apple.com/en-us/118669 | ✅ Accessible (official Apple eSIM guide) |
| Holafly eSIM Guide | https://esim.holafly.com/esim-installation-and-activation-instructions/ | ✅ Accessible |
| ExpressVPN Support | https://www.expressvpn.com/support/ | ✅ Accessible (China-specific pages removed) |
| DiDi Official | https://www.didiglobal.com/en-US | ✅ Accessible (JS-rendered) |
| Trip.com Trains | https://www.trip.com/trains/ | ✅ Accessible |
| NIA Entry Policies | https://en.nia.gov.cn/n147418/n147463/c191648/content.html | ✅ Accessible |
| Google Translate Help | https://support.google.com/translate/answer/6142468 | ✅ Accessible |

> **Note**: Neither Alipay nor WeChat Pay maintains a publicly accessible English consumer help page.
> Their foreign-user guides exist only inside the mobile apps. The URLs above are the closest official resources.

---

## 1. Payment Guide (`payment/`)

### Alipay

| Screenshot | App Screen | Path | How to capture |
|---|---|---|---|
| Alipay home screen | Alipay main page showing Pay/Scan buttons | `payment/alipay-home.jpg` | Open Alipay → screenshot home screen |
| Alipay scan QR | "Pay/Scan" screen with camera viewfinder | `payment/alipay-scan-qr.jpg` | Tap "Scan" → screenshot before scanning |
| Alipay add foreign card | "Add a bank card" screen showing Visa/MC option | `payment/alipay-add-card.jpg` | Me → Bank Cards → Add Card → screenshot |
| Alipay Tour Pass | Tour Pass / small-amount payment screen | `payment/alipay-tour-pass.jpg` | Search "Tour Pass" in Alipay → screenshot |

### WeChat Pay

| Screenshot | App Screen | Path | How to capture |
|---|---|---|---|
| WeChat wallet | Me → Services → Wallet screen | `payment/wechat-wallet.jpg` | Open WeChat → Me → Services → screenshot |
| WeChat add card | "Add Bank Card" screen in wallet | `payment/wechat-add-card.jpg` | Wallet → Add Card → screenshot |
| WeChat pay QR | Payment QR code display screen | `payment/wechat-pay-qr.jpg` | Wallet → Pay → screenshot QR code |

---

## 2. Internet/SIM/VPN Guide (`internet-sim/`)

### VPN App

| Screenshot | App Screen | Path | How to capture |
|---|---|---|---|
| VPN connected | VPN app showing successful China connection | `internet-sim/vpn-connected.jpg` | Connect VPN in China → screenshot success screen |
| VPN server list | Server selection with Hong Kong/Japan options | `internet-sim/vpn-servers.jpg` | VPN app → Choose Location → screenshot |

> Note: eSIM setup screenshots (iPhone) are already available from Holafly.

---

## 3. Transport Guide (`transport/`)

### DiDi

| Screenshot | App Screen | Path | How to capture |
|---|---|---|---|
| DiDi home | DiDi English home screen with map | `transport/didi-home.jpg` | Open DiDi (English mode) → screenshot |
| DiDi ride request | Entering destination + price estimate | `transport/didi-request.jpg` | Enter a destination → screenshot before confirming |
| DiDi ride in progress | Driver info + ride tracking | `transport/didi-riding.jpg` | During a ride → screenshot |

### Metro

| Screenshot | App Screen | Path | How to capture |
|---|---|---|---|
| Metro QR pay | Alipay/WeChat Metro QR at gate | `transport/metro-qr-pay.jpg` | Open Metro QR in Alipay → screenshot |

### Trip.com Trains

| Screenshot | App Screen | Path | How to capture |
|---|---|---|---|
| Trip.com train search | Train search results page | `transport/tripcom-trains.jpg` | Search trains on Trip.com → screenshot results |

---

## 4. Language Guide (`language/`)

### Google Translate

| Screenshot | App Screen | Path | How to capture |
|---|---|---|---|
| Google Translate camera mode | Camera translation pointing at a Chinese menu | `language/google-translate-camera.jpg` | Open Google Translate → Camera → point at Chinese text → screenshot |
| Google Translate offline pack | Offline languages download screen | `language/google-translate-offline.jpg` | Settings → Offline translation → screenshot Chinese pack |

### Baidu Translate

| Screenshot | App Screen | Path | How to capture |
|---|---|---|---|
| Baidu Translate camera | Camera mode translating Chinese text | `language/baidu-translate-camera.jpg` | Open Baidu Translate → Camera → screenshot |

---

## 5. Visa/Entry Guide (`visa-entry/`)

✅ **All images already available** — 15 NIA infographic slides downloaded.

Additional manual captures that would be nice to have:

| Screenshot | Source | Path | Notes |
|---|---|---|---|
| Online arrival card form | NIA arrival card website | `visa-entry/arrival-card-form.jpg` | Screenshot of https://s.nia.gov.cn/ArrivalCardFillingPC/ |
| COVA visa application | COVA website | `visa-entry/cova-application.jpg` | Screenshot of https://cova.mfa.gov.cn |

---

## 6. Safety/Emergency Guide (`safety-emergency/`)

| Screenshot | Source | Path | How to capture |
|---|---|---|---|
| Emergency dial screen | Phone dialer with 110 | `safety-emergency/dial-110.jpg` | Open phone dialer → type 110 → screenshot (don't call!) |
| US State Dept advisory | Travel advisory page | `safety-emergency/us-advisory.jpg` | Screenshot of https://travel.state.gov (China page) |

---

## How to Add Captured Screenshots

1. Save the screenshot to the path listed above (under `public/guides/...`)
2. Open `src/lib/guides.ts` and find the corresponding guide item
3. Add the `image` field:
   ```ts
   {
     text: "Existing step text",
     image: {
       src: "/guides/payment/alipay-home.jpg",
       alt: "Descriptive alt text for accessibility",
       caption: "Optional caption shown below the image",
     },
   }
   ```
4. Run `npm run build` to verify
5. Run `npm run dev` and check the guide page visually
