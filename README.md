# yb-react
> React(Pure) Practice 프로젝트입니다.

---

## 🚀 Create React App이란?

> React 앱을 만들기 위한 개발 환경을 **한 번에 자동으로 구성**해주는 도구입니다.  
> 복잡한 Webpack 설정 없이도 즉시 개발을 시작할 수 있도록 도와줍니다.

```sh
$ yarn create react-app yb-react --template typescript
```

---

## 📁 폴더 구조
```
yb-react/
├── node_modules/          # 패키지 모듈 저장 디렉토리 (커밋 제외)
├── package.json           # 의존 모듈 정보 및 프로젝트 설정 파일
├── public/                # 정적(static) 파일 저장 디렉토리
│   ├── index.html         # 리액트 앱의 템플릿 HTML
│   └── favicon.ico        # 브라우저 탭에 표시되는 아이콘
└── src/                   # 실제 개발이 이루어지는 작업 공간
    ├── App.js             # 메인 App 컴포넌트 (JSX)
    ├── App.css            # App 컴포넌트 전용 스타일
    ├── index.js           # App 컴포넌트를 HTML에 렌더링하는 진입점
    └── index.css          # 전역 스타일 정의
```     
---
    
## 📝 주요 파일 설명

| 파일/디렉토리       | 설명 |
|--------------------|------|
| `node_modules/`     | 설치된 외부 패키지 모듈 저장소 *(커밋하지 않음)* |
| `package.json`      | 의존성 관리 및 프로젝트 메타 정보 포함 |
| `public/index.html` | 앱이 렌더링될 HTML 템플릿 |
| `public/favicon.ico`| 브라우저 탭에 표시될 아이콘 |
| `src/App.js`        | 앱의 메인 컴포넌트 (JSX 문법 사용) |
| `src/App.css`       | App 컴포넌트 전용 스타일 |
| `src/index.js`      | App 컴포넌트를 HTML에 렌더링 |
| `src/index.css`     | 전역 스타일 적용을 위한 CSS 파일 |

---

