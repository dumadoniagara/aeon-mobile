# 📱 AeonMobile

AeonMobile is a simple **React Native demo project** built to showcase best practices in navigation, state management with **Zustand**, and API mocking for transactions.  
The app contains **two screens**:  

- **Transaction List** → shows a list of transactions.  
- **Transaction Detail** → shows detailed info of a transaction, with the ability to **share externally** (simple PDF).  

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/dumadoniagara/aeon-mobile.git
cd AeonMobile
```

### 2. Install dependencies
```bash
npm install
# or
yarn install
```

### 3. iOS setup (Mac only)
```bash
cd ios
pod install
cd ..
```

### 4. Run the app
#### For Android:
```bash
npm run android
```

#### For iOS:
```bash
npm run ios
```

#### Start Metro bundler:
```bash
npm start
```

---

## 📂 Project Structure

```
AeonMobile/
├── src/
│   ├── api/                  # API layer (mock API for transactions)
│   │   └── transactionApi.ts
│   │
│   ├── components/           # Reusable UI components
│   │   └── TransactionCard.tsx
│   │
│   ├── mocks/                # Mock JSON data
│   │   └── transactions.json
│   │
│   ├── navigation/           # Navigation setup
│   │   ├── RootNavigator.tsx
│   │   └── types.ts
│   │
│   ├── screens/              # Application screens
│   │   ├── TransactionList/
│   │   │   └── index.tsx
│   │   └── TransactionDetail/
│   │       └── index.tsx
│   │
│   ├── store/                # Global state using Zustand
│   │   └── transactionStore.ts
│   │
│   ├── utils/                # Utility functions
│   │   ├── formatDateTime.ts
│   │   └── formatCurrency.ts
│   │
│   └── App.tsx               # Entry point (loads RootNavigator)
│
├── package.json
├── tsconfig.json
└── README.md
```

---

## ✨ Features

- ⚛️ Built with **React Native 0.81** & **React 19**  
- 🧭 Navigation using **React Navigation (Native Stack)**  
- 💾 State management with **Zustand**  
- 📂 Clean folder structure (scalable for larger apps)  
- 📝 Mocked API with `transactions.json`  
- 📱 Transaction List → Detail flow  
- 📤 Share transaction details (PDF)  

---

## 🎥 Demo Video
👉 *[Attach your demo video here]*  

---

## 💡 Notes
- This project is a demo setup for interview/assessment purposes.  
- Can easily be extended to real APIs (replace `transactionApi.ts` with axios/fetch).  
- UI is kept minimal & clean, but the structure is production-ready.  

---

🔥 With this setup, you have a **clean, scalable React Native project** that shows off navigation, state management, API handling, and external sharing capability.
