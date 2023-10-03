import "./App.css";
import { SiBloglovin } from "react-icons/si";

function App() {
  return (
    <div className="container">
      <main>
        <section className="aboutme-box">
          <h1>
            안녕하세요~!
            <br />
            프론트엔드 개발자 김태욱입니다.
          </h1>
        </section>
        <section className="introduce-box">
          <h2>🙇 About Me.</h2>
          <div className="introduce-text-box">
            안녕하세요 프론트엔드 개발자를 꿈꾸는 "김태욱"입니다.
            <br />
            <br />
            저는 코드의 성능 향상을 위한 코드와 알고리즘에 관심이 많아
            적극적으로
            <br />
            학습하고 인상 깊은 코드 혹은 기술은 블로그를 통해 기록하며 자신의
            것으로
            <br />
            만들어가며 성장하고 있습니다.
            <br />
            <br />
            사용자에게 편하고 부드러운 인터페이스와 경험을 중요하게 생각하며
            그러기
            <br />
            위한 과정에서 팀원간의 소통을 중요시하며 재사용이 용이한 코드
            후일에도
            <br />
            이해하기 쉬운 코드를 쓰려고 노력합니다.
          </div>
          <div className="myprofile-box">
            <ul className="myinfo-list">
              <h3>Contact.</h3>
              <li className="myinfo-item">
                <span>📧E-mail</span>:
                <a href="mailto:taewok51615@gmail.com">taewok51615@gmail.com</a>
              </li>
              <li className="myinfo-item">
                <span>📞Phone</span>:
                <a href="tel:010-2911-4961">010-2911-4961</a>
              </li>
              <li className="myinfo-item">
                <span>👨‍🔧Github</span>:
                <a
                  href="https://github.com/taewok"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://github.com/taewok
                </a>
              </li>
              <li className="myinfo-item">
                <span>📑Blog</span>:
                <a
                  href="https://taewok.github.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://taewok.github.io
                </a>
              </li>
            </ul>
            {/* <div className="myimg-box">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH62fzQwFuoNZKHymSnGCnocX2NzSAiX9t5w&usqp=CAU" />
            </div> */}
          </div>
        </section>
        <section className="projects-box">
          <h2>📔 Projects.</h2>
          <div className="project-box" style={{ paddingBottom: "100px" }}>
            <div className="project-info-box">
              <img
                style={{ background: "black" }}
                src="https://github.com/taewok/baek-jun/assets/88264006/4f0bda1e-3ca8-466d-8405-1f70d5d95c6b"
                alt="gridians 프로젝트 아이콘"
              />
              <h3 className="projectname">Gridians</h3>
              <p className="project-period">23.01 ~ 23.02</p>
              <ul className="skill-list">
                <li className="skill-item">React</li>
                <li className="skill-item">React-Query</li>
                <li className="skill-item">Recoil</li>
                <li className="skill-item">Styled-Components</li>
              </ul>
              <b>WedbSite</b>
              <p className="projecturl">
                <a href="https://www.gridians.site">
                  https://www.gridians.site
                </a>
              </p>
              <b>GithubSite</b>
              <p className="project-github-url">
                <a href="https://github.com/gridians/gridians-fe">
                  https://github.com/gridians/gridians-fe
                </a>
              </p>
            </div>
            <div className="project-detail-box">
              <h4 className="center-text">[ 소개 ]</h4>
              <p>개발자을 위한 프로필카드 만들기 및 소통 사이트</p>
              <h4 className="center-text">[ 참여인원 ]</h4>
              <p className="team-members">
                <span>Frontend: 2명</span>
                <span>Backend: 2명</span>
              </p>
              <h4 className="center-text">[ 구현 내용 ]</h4>
              <ul className="role-list">
                <li className="role-item">
                  <b>react-query</b>와 <b>throttle</b>를 사용해 일정 스크롤시
                  데이터를 추가로 받아오는 무한스크롤
                </li>
                <li className="role-item">
                  <b>Github Rest API</b>를 활용한 <b>github</b>연동 및 정보 표현
                </li>
                <li className="role-item">
                  react-github-calendar 라이브러리를 사용해 잔디 생성
                </li>
                <li className="role-item">
                  유저가 즐겨찾기 한 카드 유무에 따른 css 변화
                </li>
                <li className="role-item">
                  react-slick 라이브러리를 이용한 슬라이드 생성
                </li>
                <li className="role-item">프로필카드 생성 및 수정</li>
                <li className="role-item">전반적인 퍼블리싱</li>
              </ul>
              <h4 className="center-text">[ 성장, 문제해결 ]</h4>
              <ul className="role-list">
                <li className="role-item grow-item">
                  <a href="https://taewok.github.io/posts/async,await%EC%82%AC%EC%9A%A9/">
                    비동기 작업을 동기적으로 처리하기 위한 async & await 사용{" "}
                    <SiBloglovin />
                  </a>
                </li>
                <li className="role-item grow-item">
                  <a href="https://taewok.github.io/posts/recoil/">
                    상태관리 라이브러리인 Recoil을 사용한 전역 산태 관리{" "}
                    <SiBloglovin />
                  </a>
                </li>
                <li className="role-item grow-item">
                  <a href="https://taewok.github.io/posts/react-query/">
                    데이터 관리 라이브러리인 React-Query 사용
                    <SiBloglovin />
                  </a>
                </li>
                <li className="role-item grow-item">
                  <a href="https://taewok.github.io/posts/react-lazy/">
                    React 제공 함수인 lazy() 숙지 <SiBloglovin />
                  </a>
                </li>
                <li className="role-item grow-item">
                  <a href="https://taewok.github.io/posts/jwt-login%EB%B0%A9%EC%8B%9D/">
                    sweet alert2 라이브러리 사용 <SiBloglovin />
                  </a>
                </li>
                <li className="role-item grow-item">
                  styled-components 라이브러리를 통한 컴포넌트 단위 스타일링
                </li>
              </ul>
            </div>
          </div>
          <div className="project-box">
            <div className="project-info-box">
              <img
                style={{ background: "black" }}
                src="https://user-images.githubusercontent.com/66842566/247418355-39335476-6b15-4ff3-be52-be5b47dbbd10.png"
                alt="twogather 프로젝트 아이콘"
              />
              <h3 className="projectname">Twogather</h3>
              <p className="project-period">23.05 ~ 23.07</p>
              <ul className="skill-list">
                <li className="skill-item">React</li>
                <li className="skill-item">TypeScript</li>
                <li className="skill-item">React-Query</li>
                <li className="skill-item">Recoil</li>
                <li className="skill-item">Styled-Components</li>
              </ul>
              <b>WedbSite</b>
              <p className="projecturl">
                <a href="https://twogather.netlify.app">
                  https://twogather.netlify.app
                </a>
              </p>
              <b>GithubSite</b>
              <p className="project-github-url">
                <a href="https://github.com/TWOGATH3R/twogather-web-frontend">
                  https://github.com/TWOGATH3R/twogather-web-frontend
                </a>
              </p>
            </div>
            <div className="project-detail-box">
              <h4 className="center-text">[ 소개 ]</h4>
              <p>
                다양한 키워드를 사용하여 가게를 검색하고 리뷰를 남길 수 있는
                맛집사이트
              </p>
              <h4 className="center-text">[ 참여인원 ]</h4>
              <p className="team-members">
                <span>Frontend: 3명</span>
                <span>Backend: 2명</span>
              </p>
              <h4 className="center-text">[ 구현 내용 ]</h4>
              <ul>
                <li className="role-item">
                  axios interceptors, create을 활용한 반복 코드 간결화
                </li>
                <li className="role-item">
                  쿼리스트링을 활용한 url을 변경하는 것 만으로 원하는 검색결과와
                  page 결과 얻기
                </li>
                <li className="role-item">
                  지역, 카테고리, 메뉴 더보기, 사유 입력 등 모달창 컴포넌트 구현
                </li>
                <li className="role-item">
                  로그인, 회원가입, pw찾기, id찾기, 댓글/대댓글 등록/삭제/수정
                  구현
                </li>
                <li className="role-item">
                  로그인, 회원가입, pw/id찾기, admin, home, mypage, 검색결과
                  페이지 퍼블리싱
                </li>
                <li className="role-item">
                  로컬 스토리지에 저장된 권한에 따른 ui와 기능
                </li>
                <li className="role-item">
                  pagenation, Filter 컴포넌트를 따로 분리하여 재사용성 상승
                </li>
                <li className="role-item">
                  react-cookie를 활용한 accessToken 관리
                </li>
                <li className="role-item">
                  input 입력상태에 따른 양식 안내와 alert
                </li>
                <li className="role-item">가게 좋아요 추가/해제 기능</li>
              </ul>
              <h4 className="center-text">[ 성장, 문제해결 ]</h4>
              <ul className="role-list">
                <li className="role-item grow-item">
                  <a href="https://taewok.github.io/posts/jwt-login%EB%B0%A9%EC%8B%9D/">
                    jwt와 jwt + refreshToke + accessToken로그인 방식에 이해{" "}
                    <SiBloglovin />
                  </a>
                </li>
                <li className="role-item grow-item">
                  <a href="https://taewok.github.io/posts/jwt-Token-decoding/">
                    <b>accessToken</b>에 <b>payload</b>를 <b>decoding</b>을
                    통하여 정보 읽기 <SiBloglovin />
                  </a>
                </li>
                <li className="role-item grow-item">
                  <a href="https://taewok.github.io/posts/axios-interceptors/#interceptors-%EC%82%AC%EC%9A%A9%EB%B2%95">
                    axios interceptors를 사용해 api 통신 처리시 반복부분 간결화{" "}
                    <SiBloglovin />
                  </a>
                </li>
                <li className="role-item grow-item">
                  <a href="https://taewok.github.io/posts/query-string/">
                    Query String 형식을 이용한 URL경로를 통한 매개변수 전달{" "}
                    <SiBloglovin />
                  </a>
                </li>
                <li className="role-item grow-item">
                  <a href="https://taewok.github.io/posts/path-Parameter/">
                    path parameter를 사용해 URL경로를 통한 변수 전달{" "}
                    <SiBloglovin />
                  </a>
                </li>
                <li className="role-item grow-item">
                  <a href="https://taewok.github.io/posts/No-QueryClient-set,-use-QueryClientProvider-to-set-one/">
                    react-query가 V4 업데이트로 인한 import 에러해결{" "}
                    <SiBloglovin />
                  </a>
                </li>
                <li className="role-item grow-item">
                  <a href="https://taewok.github.io/posts/Cannot-destructure-property-'data'-of-'(intermediate-value)'-as-it-is-undefined/">
                    axios error 핸들링중 객체 안나오는 현상 문제해결{" "}
                    <SiBloglovin />
                  </a>
                </li>
                <li className="role-item grow-item">
                  <a href="https://taewok.github.io/posts/in-not-a-function/">
                    타입스크립트 setState hook을 자식 컴포넌트로 전달할 떄 is
                    not a function 문제해결 <SiBloglovin />
                  </a>
                </li>
                <li className="role-item grow-item">
                  타입스크립트의 정적 타입 검사 활용
                </li>
                <li className="role-item">
                  react-cookie를 활용한 accessToken 관리
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="skill-box">
          <h2>🔧 Skills.</h2>
          <h3 className="skill-name">HTML / CSS</h3>
          <ul className="skill-explain-list">
            <li className="skill-explain-item">
              시맨틱 마크업에 대한 이해를 바탕으로 웹표준을 준수한 레이아웃 설계
            </li>
            <li className="skill-explain-item">
              유동 그리드 레이아웃, 이미지, 미디어 쿼리 등을 이용한 반응형 웹
              구현
            </li>
            <li className="skill-explain-item">
              CSS의 가독성을 높이고, 유지보수에 용이한 SCSS 사용
            </li>
            <li className="skill-explain-item">
              프로젝트의 디자인에 알맞은 스타일 적용
            </li>
          </ul>
          <h3 className="skill-name">TypeScript / JavaScript</h3>
          <ul className="skill-explain-list">
            <li className="skill-explain-item">
              JS, TS를 이용한 연산과 DOM 객체의 조작
            </li>
            <li className="skill-explain-item">
              async/await 등을 활용한 비동기 작업 처리
            </li>
            <li className="skill-explain-item">
              Rest API 기반의 서버 통신 및 데이터 처리
            </li>
            <li className="skill-explain-item">
              타입스크립트의 정적 타입 검사를 활용하여 코드 안정성을 높이고
              런타임 에러를 사전에 방지
            </li>
            <li className="skill-explain-item">
              인터페이스와 타입 정의를 사용하여 코드의 가독성과 재사용성 상승
            </li>
            <li className="skill-explain-item">함수형 프로그래밍 지향</li>
          </ul>
          <h3 className="skill-name">React</h3>
          <ul className="skill-explain-list">
            <li className="skill-explain-item">
              React Hook을 통한 변수 관리와 라이프 사이클에 적절한 활용
            </li>
            <li className="skill-explain-item">
              컴포넌트의 재사용성을 고려한 컴포넌트 구현
            </li>
            <li className="skill-explain-item">다양한 라이브러리 응용</li>
          </ul>
        </section>
        <section className="experience-box">
          <h2>🏃 Experience.</h2>
          <div className="project-box">
            <div className="project-info-box">
              <h4>
                오픈플랫폼을 활용한 마이크로 웹서비스 융합 개발자 양성 과정
              </h4>
              <ul>
                <li className="date">2021-07-30 ~ 2022-01-24</li>
              </ul>
            </div>
            <div className="project-detail-box">
              <h4 className="center-text" style={{ paddingTop: "0" }}>
                [ 활동 내용 ]
              </h4>
              <ul style={{ paddingLeft: "30px" }}>
                <li className="experience-list-item">
                  데이터베이스 MySQL 기초
                </li>
                <li className="experience-list-item">JAVA 프로그래밍 기초</li>
                <li className="experience-list-item">
                  HTML, CSS, JavaScript, Jquery를 이용한 화면설계와 화면구현
                </li>
                <li className="experience-list-item">
                  요구사항 정의서와 ERD 작성
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="education-box">
          <h2>🏤 Education.</h2>
          <h3 className="education-name">경기경영고등학교</h3>
          <h3 className="education-type">스마트콘텐츠과</h3>
          <ul>
            <li className="date">2018.03 ~ 2021.01 (졸업)</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
