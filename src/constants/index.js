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
        title: "리액트를 이용한 기본 css 연습",
        code: "https://github.com/arbor0428/react_clone01",
        view: "https://gilded-capybara-02bdcb.netlify.app/",
        info: "이 프로젝트는 React.js를 사용하여 사이트를 번들링하고 관리합니다. 또한 AOS 라이브러리를 활용하여 스크롤 효과를 부여했습니다. useState와 useEffect를 사용하여 헤더 효과 이벤트 처리 및 기본 form 데이터 푸시 작업을 처리합니다. 사이트는 Netlify를 통해 배포되며, Git을 사용하여 파일을 관리합니다. HTML 및 CSS를 기반으로 웹사이트의 기본 레이아웃을 설계하고, 웹 표준 및 웹 접근성을 준수하여 작업되었습니다. ARIA(Accessible Rich Internet Applications)를 이용하여 웹 접근성을 향상시켰습니다.",
    },
    {
        title: "투두리스트",
        code: "https://github.com/arbor0428/todo-list",
        view: "https://sage-belekoy-3f0d37.netlify.app/",
        info: "이 프로젝트는 React를 사용하여 구현되며 다양한 기능을 제공합니다. 사용자는 datepicker를 통해 날짜를 선택하고 변경할 수 있습니다. 또한 useRef와 useState hook를 활용하여 사용자 이름을 입력하고 변경할 수 있습니다. 타이머 기능은 useState hook를 사용하여 시작, 정지, 리셋 기능이 포함된 타이머를 구현하고, 전체 아이템을 배열로 처리하여 표시합니다. 아이템 추가 및 삭제 또한 useState hook를 활용하여 가능하며, 아이템의 상태를 변경하여 완료된 항목을 표시할 수 있습니다. 또한, useState hook와 useEffect hook을 사용하여 특정 기준에 따라 할 일 항목을 필터링하여 보여줄 수 있습니다. 이 프로젝트는 다크 모드를 지원하며, useState, useEffect hook과 tailwindcss, createContext()를 활용하여 구현됩니다. 마지막으로, useState와 useEffect를 사용하여 사용자 이름과 할 일 목록을 로컬 스토리지에 저장하여 이전 상태를 유지할 수 있습니다.",
    },
    {
        title: "유튜브 어플리케이션",
        code: "https://github.com/arbor0428/react_youtube",
        view: "https://master--flourishing-lebkuchen-fcb261.netlify.app/",
        info: "이 프로젝트는 React를 사용하여 구현되며, react-router-dom의 useNavigate와 useParams를 활용하여 검색 헤더를 구현합니다. 사용자는 검색할 수 있는 form을 제공받게 됩니다. 비디오 카드는 useQuery와 axios를 사용하여 mock 데이터인 json 또는 실제 네트워크 통신을 통한 api 데이터를 스위칭하여 보여줄 수 있습니다. 이를 위해 .env 파일을 만들고 네트워크 관련된 secret key들을 관리합니다. 또한, 사용자는 상세 페이지로 이동하여 해당 비디오의 데이터를 확인할 수 있습니다. navigate를 사용하여 video 객체를 전달받고 해당 id로 이동하여 해당 비디오의 데이터를 보여줍니다. 또한, 해당 비디오의 id를 받아와서 연관된 비디오들을 보여줍니다.",
    },
    {
        title: "쇼핑몰 프로젝트",
        code: "https://github.com/arbor0428/shoppy",
        view: "https://resilient-selkie-38c036.netlify.app/",
        info: "이 프로젝트는 React를 사용하여 구현되며, react-router-dom의 link 태그를 활용하여 해당 페이지로 이동할 수 있도록 헤더를 설정합니다. Router를 설정할 때 한 단계 component로 감싸고 context를 만들어서 로그인 상태와 권한에 따라 경로를 보호합니다. 로그인 및 로그아웃 기능은 useState hook과 firebase를 활용하여 googleAuthProvider를 가져와 구현됩니다. useEffect hook과 onAuthStateChanged 함수를 사용하여 refresh 후에도 로그인/로그아웃 상태를 유지하며, firebase 데이터에 어드민 사용자 uid를 추가하여 제품 등록 권한을 제공합니다. 제품 등록 기능은 useState hook과 firebase, cloudinary를 사용하여 어드민 권한을 가진 사용자가 입력폼을 통해 제품을 등록할 수 있습니다. 각 제품당 여러 장의 사진을 등록할 수 있습니다. 제품 필터링은 router를 사용하여 필터링된 제품들만 보여지는 페이지로 이동하며, 제품 상세페이지는 router를 사용하여 해당 제품의 상세페이지로 경로를 이동할 수 있습니다. react-query를 사용하여 등록된 제품들을 보여주고, useState를 활용하여 선택된 옵션을 보여줍니다. 장바구니 기능은 context를 사용하여 user의 uid를 받아오고 firebase에 제품을 추가, 삭제 및 읽어올 수 있으며, useQuery를 사용하여 장바구니 안에 있는 갯수를 표시합니다.",
    },
];