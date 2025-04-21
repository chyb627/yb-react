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

| 파일/디렉토리        | 설명                                             |
| -------------------- | ------------------------------------------------ |
| `node_modules/`      | 설치된 외부 패키지 모듈 저장소 _(커밋하지 않음)_ |
| `package.json`       | 의존성 관리 및 프로젝트 메타 정보 포함           |
| `public/index.html`  | 앱이 렌더링될 HTML 템플릿                        |
| `public/favicon.ico` | 브라우저 탭에 표시될 아이콘                      |
| `src/App.js`         | 앱의 메인 컴포넌트 (JSX 문법 사용)               |
| `src/App.css`        | App 컴포넌트 전용 스타일                         |
| `src/index.js`       | App 컴포넌트를 HTML에 렌더링                     |
| `src/index.css`      | 전역 스타일 적용을 위한 CSS 파일                 |

---

## React-router-dom

- React 앱의 라우팅 처리를 위한 라이브러리
- React의 react-router 라이브러리 기반으로 만들어짐

```sh
$ yarn add react-router-dom
```

---

## 컴포넌트

- 리액트 앱을 구성하는 최소한의 단위
- 애플리케이션의 구성 요소를 담당하며, 재사용 가능하고 독립적인단위로 구성
- 재사용
  - 컴포넌트는 독립적이고 모듈화된 단위로 작성.
  - 필요한 곳에서 쉽게 재사용 가능
- 가독성과 유지보수성
  - UI 구조를 명확하게 파악 가능
  - 개별 컴포넌트를 수정하여 유지보수를 용이하게 함
- 효율적 업데이트
  - 가상 DOM 활용하여 효율적이게 업데이트, 필요한 부분만 다시 렌더링

---

## CSS의 BEM 모델

- BEM
  - Block-Element-Modifier 모델
  - CSS 클래스 네이밍
  - 가독성, 재사용성 UP
  - Blockl : 최상위 요소
  - Element : 블록의 일부. 특정 기능 수행
  - Modifier : 블록, 엘리먼트의 외관이나 상태 변경
- BEM 장점
  - 가독성 : 클래스명에 구조적인 정보를 담아 코드를 읽기 쉽게 함
  - 재사용성 : 모듈화된 구조로 컴포넌트의 재사용 쉬움
  - 유지보수성 : 클래스간의 의존성을 낮춤
- BEM 단점
  - 클래스명 길어질 수 있음
  - 요소 및 수정자 사용을 위해 추가적인 클래스 작성

```html
<div class="block">
  <h2 class="block__title">Block Title</h2>
  <ul class="block__list">
    <li class="block__list-item">Item 1</li>
    <li class="block__list-item block__list-item--highlighted">Item 2</li>
    <li class="block__list-item">Item 3</li>
  </ul>
</div>

<!-- block : Block -->
<!-- block__title : Element -->
<!-- block__list : Element -->
<!-- block__list-item--highlighted : Modifier -->
```

## 🔥 Firebase 소개

Firebase는 **모바일 및 웹 애플리케이션 개발을 위한 통합 플랫폼**으로, 실시간 데이터베이스, 사용자 인증, 클라우드 스토리지, 분석 등 다양한 기능을 제공합니다.

---

### 📌 개요

- **출시**: 2011년 (스타트업 → 2014년 Google 인수)
- **특징**:
  - 백엔드 서버 **구축 및 관리 불필요 (서버리스)**
  - **Google Cloud Platform** 기반으로 빠르고 효율적인 개발 지원
  - 실시간 기능 서비스에 최적화
  - 클라이언트 사이드 중심 개발
  - 초기 **프로토타입 개발에 매우 유용**

---

### 🔐 Authentication - 사용자 인증

간편한 **다중 플랫폼 로그인** 방식 지원:

- 📧 이메일/비밀번호 로그인
- 🔗 소셜 로그인 (Google, Facebook 등)
- 📱 전화번호 인증

> ✅ **강화된 보안**으로 안전한 인증 처리

---

### 📂 Firestore - NoSQL 데이터베이스

Firebase의 **클라우드 기반 NoSQL 데이터베이스**:

- 실시간 데이터 **동기화** 지원
- 예: 실시간 채팅, 협업 도구 등에 활용 가능

---

### 🗃️ Storage - 사용자 파일 저장소

- 이미지, 동영상 등 **사용자 파일 저장 및 공유**
- 강력한 보안 정책 적용

---

### 🌐 Hosting - 웹/앱 호스팅

- 정적 및 동적 콘텐츠 모두 호스팅 가능
- 웹사이트/앱을 **간편하게 배포** 가능

---

### ✅ 요약

| 기능           | 설명                                 |
| -------------- | ------------------------------------ |
| Authentication | 이메일, 소셜, 전화번호 인증 지원     |
| Firestore      | 실시간 동기화 가능한 NoSQL DB        |
| Storage        | 이미지/동영상 등 파일 저장소         |
| Hosting        | 정적·동적 콘텐츠 호스팅 및 간편 배포 |

---

### 장점

- 백엔드 서버 없이 개발, 개발 시간 절약, 클라이언트에 집중해서 개발 가능
- 실시간 데이터베이스: 사용자 데이터 실시간 공유, 실시간 채팅 등의 시능 쉽게 개발 가능
- 구글 플랫폼 통합: 구글 클라우트 플랫폼 서비스 쉽게 이용 및 분석 가능

---

### 단점

- 쿼리 제한 : NoSQL 데이터 베이스의 간단한 쿼림나 사용 가능
- 비용 : 확장성이 중요한 경우 비용이 빠르게 증가할 수 있음
- 마이그레이션 어려움: 타 백엔드 서비스로 전환하는 경우 추가적인 작업 필요

## env

[링크](https://www.notion.so/env-1dc59a34b64c801d966ee966bca84e61?showMoveTo=true&saveParent=true)
