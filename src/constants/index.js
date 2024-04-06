import site01 from "../assets/img/homepage01.png";
import site02 from "../assets/img/homepage02.png";
import site03 from "../assets/img/homepage03.png";
import site04 from "../assets/img/homepage04.png";
import site05 from "../assets/img/homepage05.png";
import site06 from "../assets/img/homepage06.png";
import site07 from "../assets/img/homepage07.png";
import site08 from "../assets/img/homepage08.png";
import site09 from "../assets/img/homepage09.png";
import site10 from "../assets/img/homepage10.png";
import site11 from "../assets/img/homepage11.png";
import site12 from "../assets/img/homepage12.png";
//import site13 from "../assets/img/homepage13.png";
//import site14 from "../assets/img/homepage14.png";


export const siteText = [
    {
        num: 3,
        code: "https://github.com/arbor0428/class_video_shop",
        text: ["#HTML5", "#CSS3", "#JQUERY", "#PHP"],
        img: site04,
        title: "에듀핌",
        detail01:"강사들을 교육하는 동영상 강의 홈페이지 입니다.",
        detail02:"웹 표준 지침서를 준수하여 코딩한 웹표준 사이트이며 자바스크립트 제이쿼리를 활용하여 동적인 효과를 주었습니다.",
        info: [
            "2022.09 ~ 2023.01",
            "백엔드 개발자 1명, 디자이너 1명, 퍼블리셔 2명",
            "퍼블리싱작업 70%",
            "나의 강의실, 마이 페이지, 메인페이지 반응형 퍼블리싱 및 동적 효과 구현"
        ],
        view: "https://www.edupimcampus.com/",
    },
    {
        code: "https://github.com/arbor0428/video_effect_site",
        text: ["#HTML5", "#CSS3", "#JQUERY", "#RESPONSIVE", "#FULLPAGE"],
        img: site05,
        title: "크로브",
        detail01:"동영상 제어 및 다양한 모션을 더한 홈페이지 입니다.",
        detail02:"fullpage 플러그인을 활용하고 자바스크립트 제이쿼리를 활용해서 동영상 제어 및 화려한 동적 효과를 구현한 반응형 홈페이지 입니다.",
        info: [
            "2022.06 ~ 2022.09",
            "백엔드 개발자 1명, 디자이너 1명, 프론트엔드 1명",
            "프론트단 작업 100%",
            "메인, 서브 전체 페이지 반응형 퍼블리싱 및 동적 효과 구현"
        ],
        view: "http://www.crob.co.kr/",
    },
    {
        num: 3,
        code: "https://github.com/arbor0428/hospital_chart",
        text: ["#HTML5", "#CSS3", "#JQUERY", "#PHP"],
        img: site02,
        title: "준차트",
        detail01:"한의원 고객 문진 모바일 페이지와 의사용 안진 및 진료 관리 시스템입니다.",
        detail02:"고객 문진 모바일 페이지에서는 radio 태그와 checkbox의 onclick 이벤트를 활용해서 다양한 형태의 css를 적용했습니다. 안진 및 진료 관리 시스템은 pc 전용 화면으로 구현하였고 연산자 함수를 활용한 value값 설정, 팝업창, 드래그앤드롭 기능, 테이블 추가 및 삭제, 인체부위도 증상에 따른 색 표시 기능 등을 구현했습니다. 외부 기획자, 개발자와 gitlab으로 소통 및 협업으로 진행한 프로젝트 입니다.",
        info: [
            "2022.07 ~ 2022.12",
            "백엔드 개발자 1명, 디자이너 1명, 기획자 1명, 프론트엔드 1명",
            "프론트 및 퍼블리싱 100%",
            "메인, 서브 전체 페이지 전체 퍼블리싱 및 동적 script 구현"
        ],
        view: "https://arbor0428.github.io/hospital_chart/admin/index.html",
    },
    {
        code: "https://github.com/arbor0428/hospital_chart",
        text: ["#HTML5", "#CSS3", "#JQUERY", "#PHP", "#HIGHCHART.JS"],
        img: site03,
        title: "마이셀프스탁",
        detail01:"highchart.js를 활용한 실시간 주식 사이트 입니다.",
        detail02:"메인 페이지 시안을 기준으로 모든 페이지들의 퍼블리싱과 자바스크립트 제이쿼리를 활용하여 동적 script들을 구현하고 백엔드 개발자와 주식 전문가와의 소통 및 협업과 동시에 highchart.js 활용해서 기존 주식 api에 알맞은 그래프들을 구현한 주식 사이트 입니다.",
        info: [
            "2022.05 ~ 2023.01",
            "백엔드 개발자 1명, 디자이너 1명, 프론트엔드 1명",
            "프론트단 작업 100%",
            "프론트단 작업 및 highchart.js 관련 그래프 작업, 메인 시안 기준으로 서브 페이지 알아서 디자인 구현"
        ],
        view: "http://myselfstock.com/",
    },
    {
        code: "https://github.com/arbor0428/healthcare_eventpage",
        text: ["#HTML5", "#CSS3", "#RESPONSIVE", "#JQUERY", "#PHP"],
        img: site01,
        title: "롯데헬스케어",
        detail01:"롯데헬스케어의 신사업 소개 및 해외 전시회 관련 8개의 캐즐몬 유형 검사 페이지 입니다.",
        detail02:"HTML5의 '미디어 쿼리'를 이용하여 디바이스 환경에 맞춰서 만든 반응형 국문/ 영문 홈페이지이며 자바스크립트 제이쿼리와 GSAP 및 SWIPER 플러그인들을 활용하여 메뉴, 슬라이드, 탭, 동영상, 마우스오버, animation 등 동적인 효과를 주었습니다.",
        info: [
            "2022.08 ~ 2023.01",
            "백엔드 개발자 1명, 디자이너 1명, 퍼블리셔 1명",
            "퍼블리싱 100%",
            "메인, 회사 소개, 제품 소개, 캐즐몬 8개 상세페이지, 뉴스룸 반응형 퍼블리싱 및 동적 효과 구현"
        ],
        view: "https://www.lottehealthcare.com/kr/main",
    },
    {
        code: "https://github.com/arbor0428/usim_site",
        text: ["#HTML5", "#CSS3", "#JQUERY", "#RESPONSIVE", "#PHP"],
        img: site06,
        title: "한패스모바일",
        detail01:"태블릿 pc 화면 기준으로 구현된 유심구매 웹페이지 입니다.",
        detail02:"기존에 있던 한패스모바일 어플을 참고하여 다국어 구글 번역 api를 활용한 만든 웹페이지입니다. 디바이스 환경에 맞춰서 구현한 반응형 홈페이지입니다. 웹 표준 지침서를 준수하여 코딩한 웹표준 사이트이며 자바스크립트 제이쿼리를 활용하여 동적인 효과를 주었습니다. ",
        info: [
            "2022.09 ~ 2023.01",
            "백엔드 개발자 1명, 디자이너 1명, 퍼블리셔 1명",
            "퍼블리싱작업 100%",
            "메인페이지, 유심구매, 요금제 가입하기 등 반응형 퍼블리싱 및 동적 효과 구현, 기획 담당자와의 소통"
        ],
        view: "https://www.hanpassmobile.co.kr/",
    },
    {
        num: 3,
        code: "https://github.com/arbor0428/child_education",
        text: ["#HTML5", "#CSS3", "#JQUERY", "#RESPONSIVE"],
        img: site07,
        title: "세이펜",
        detail01:"기존 세이펜 홈페이지의 리뉴얼화 했습니다.",
        detail02:"외부 디자이너 및 개발자와 소통하면서 기존 홈페이지를 리뉴얼화했던 프로젝트입니다. 자바스크립트 제이쿼리를 활용해서 동적 script를 구현 하고 메인, 서브 전체 페이지를 코딩한 반응형 홈페이지입니다.",
        info: [
            "2022.06 ~ 2022.11",
            "백엔드 개발자 1명, 디자이너 1명, 퍼블리셔 1명",
            "퍼블리셔 작업 100%",
            "메인, 서브 전체 페이지 반응형 퍼블리싱 및 동적 효과 구현"
        ],
        view: "https://www.saypen.com/",
    },
    {
        code: "https://www.efac.or.kr/",
        text: ["#HTML5", "#CSS3", "#JQUERY", "#RESPONSIVE", "#PHP"],
        img: site08,
        title: "은평문화재단",
        detail01:"기존 있던 적응형 홈페이지 유지, 보수 담당 맡았던 홈페이지 입니다.",
        detail02:"은평문화재단 홈페이지 유지보수 담당자로 배정되어서 작업을 진행했습니다. 기존에 이미 만들어져 있던 홈페이지 소스 코드들을 정기적으로 정리하고 수정 및 리뉴얼화 작업을 했습니다.",
        info: [
            "2022.06 ~ 2023.01",
            "문화재단 소통 담당자 및 유지 보수 관리자",
            "담당 작업 100%",
            "기존 페이지 정기적인 수정 및 리뉴얼 작업"
        ],
        view: "https://www.efac.or.kr/",
    },
    {
        code: "https://github.com/arbor0428/institution",
        text: ["#HTML5", "#CSS3", "#JQUERY", "#RESPONSIVE", "#PHP"],
        img: site09,
        title: "광운대산학협력단",
        detail01:"기존 광운대산학협력단 홈페이지를 리뉴얼화 했습니다.",
        detail02:"디바이스 환경에 맞춰서 slick 플러그인으로 슬라이드 효과를 준 반응형 홈페이지입니다. 웹 표준 지침서를 준수하여 코딩한 웹표준 사이트이며 자바스크립트 제이쿼리를 활용하여 동적인 효과를 주었습니다.",
        info: [
            "2022.09 ~ 2022.11",
            "백엔드 개발자 1명, 디자이너 1명, 퍼블리셔 1명",
            "퍼블리셔 작업 100%",
            "메인, 서브 전체 페이지 반응형 퍼블리싱 및 동적 효과 구현"
        ],
        view: "https://iacf.kw.ac.kr/",
    },
    {
        code: "https://github.com/arbor0428/abroadinfo",
        text: ["#HTML5", "#CSS3", "#JQUERY", "#RESPONSIVE", "#PHP"],
        img: site10,
        title: "해외지식가이드북",
        detail01:"10개국 해외지식가이북을 html화하는 작업입니다.",
        detail02:"디바이스 환경에 맞춰서 구현한 반응형 홈페이지입니다. 기존 해외지식가이드북 홈페이지에서 10개국 추가 하는 작업을 했습니다. 웹 표준 지침서를 준수하여 코딩한 웹표준 사이트이며 자바스크립트 제이쿼리를 활용하여 동적인 효과를 주었습니다. ",
        info: [
            "2022.10 ~ 2022.12",
            "퍼블리셔 1명",
            "퍼블리셔 작업 100%",
            "해외지식가이드북 10개국 반응형 퍼블리싱 및 동적 효과 구현"
        ],
        view: "https://arbor0428.github.io/abroadinfo/index.html",
    },
    {
        code: "https://github.com/arbor0428/fashion_info_site",
        text: ["#HTML5", "#CSS3", "#JQUERY", "#RESPONSIVE", "#PHP"],
        img: site11,
        title: "스타일 세븐",
        detail01:"고객 맞춤형 스타일을 제공하는 쇼핑몰 형 홈페이지 입니다.",
        detail02:"디바이스 환경에 맞춘 반응형 홈페이지입니다. 웹 표준 지침서를 준수하여 코딩한 웹표준 사이트이며 자바스크립트 제이쿼리를 활용하여 다양한 동적인 효과를 주었습니다. 메인페이지, 로그인, 회원가입, 장바구니, 구매하기 페이지를 구현했습니다.",
        info: [
            "2022.01 ~ 2022.03",
            "백엔드 개발자 1명, 디자이너 1명, 퍼블리셔 1명",
            "퍼블리싱작업 100%",
            "메인, 서브 전체 페이지 (장바구니, 구매하기, 마이페이지 포함) 반응형 퍼블리싱 및 동적 효과 구현"
        ],
        view: "https://arbor0428.github.io/fashion_info_site/checkList.html",
    },
    {
        code: "https://github.com/arbor0428/ready-mixed_concrete",
        text: ["#HTML5", "#CSS3", "#JQUERY", "#RESPONSIVE", "#PHP"],
        img: site12,
        title: "흥국산업",
        detail01:"레미콘 기업, 흥국산업 주식회사 홈페이지 입니다.",
        detail02:"디바이스 환경에 맞춰서 slick 플러그인으로 슬라이드 효과를 준 다국어 반응형 홈페이지입니다. 웹 표준 지침서를 준수하여 코딩한 웹표준 사이트이며 자바스크립트 제이쿼리를 활용하여 동적인 효과를 주었습니다. 또한 php언어를 활용하여 게시판 연결 작업을 했습니다.",
        info: [
            "2022.03 ~ 2022.04",
            "백엔드 개발자 1명, 디자이너 1명, 퍼블리셔 1명",
            "퍼블리싱작업 100%",
            "영문, 국문, 메인, 서브 전체 페이지 반응형 퍼블리싱 및 동적 효과 구현"
        ],
        view: "http://hkone.co.kr/",
    }
    
];



export const practiceText = [
    {
        num:'01',
        title: "공공 데이터 api 연습",
        code: "https://github.com/arbor0428/WeatherWithPuppy",
        view: "https://bucolic-capybara-bfaced.netlify.app/",
        info: [
            "axios를 활용하여 API 데이터 fetching",
            "react-router-dom의 useNavigate(), useLocation(), useParams()를 이용한 검색 form 구현.",
            ".env 파일을 활용한 네트워크 관련 secret key 관리"
        ],
    },
    {
        num:'02',
        title: "투두리스트",
        code: "https://github.com/arbor0428/typescript_todolist",
        view: "https://tiny-salamander-d72637.netlify.app/",
        info:  [
            "datepicker를 활용한 날짜 선택/변경.",
            "useRef와 useState로 사용자 이름 입력/변경.",
            "useState를 활용한 시작/정지/리셋 기능을 갖춘 타이머 구현.",
            "useState를 활용한 할 일 항목 추가/삭제 및 필터링 처리.",
            "tailwindcss, createContext()를 활용한 다크 모드 구현.",
            "useState, useEffect를 활용하여 이전 상태를 유지할 수 있는 로컬 스토리지 저장 기능 구현."
        ],
    },
    {
        num:'03',
        title: "유튜브 어플리케이션",
        code: "https://github.com/arbor0428/react_youtube",
        view: "https://master--flourishing-lebkuchen-fcb261.netlify.app/",
        info:  [
            "react-router-dom의 useNavigate, useParams를 이용한 검색 form 구현.",
            "seQuery, axios, context를 활용하여 mock 데이터 또는 API 데이터 스위칭",
            ".env 파일을 활용한 네트워크 관련 secret key 관리",
            "navigate를 활용하여 video 객체 전달 및 해당 id로 이동하여 데이터 표시, 관련 비디오들 표시.",
        ],
    },
    {
        num:'04',
        title: "쇼핑몰 프로젝트",
        code: "https://github.com/arbor0428/shoppy",
        view: "https://resilient-selkie-38c036.netlify.app/",
        info:  [
            "react-router-dom의 link태그를 이용하여 페이지 이동 처리 및 보호된 경로 설정.",
            "useState hook과 firebase를 활용한 로그인/로그아웃 기능 구현 및 데이터베이스 관리.",
            "어드민 권한을 가진 사용자를 위한 제품 등록 기능 구현.",
            "router를 활용하여 필터링된 제품들만 표시하는 페이지로 이동.",
            "router를 사용하여 제품의 상세페이지로 이동 및 react-query를 통한 데이터 표시.",
            "장바구니 기능 구현을 위해 context와 firebase를 활용하여 제품 추가, 삭제 및 조회 기능 구현."
        ],
    },
];
