import "./App.css";
import { MdEmail, MdSpeakerNotes } from "react-icons/md";
import { AiFillPhone, AiFillGithub } from "react-icons/ai";

function App() {
  return (
    <div className="container">
      <main>
        <section className="aboutme-box">
          <h1>
            안녕하세요~!
            <br />
            꽃아서 파고드는, 개발자 김태욱입니다.
          </h1>
          <div className="myprofile-box">
            <ul className="myinfo-list">
              <li className="myinfo-item">
                <span>
                  <MdEmail />
                </span>
                <a href="mailto:taewok51615@gmail.com">taewok51615@gmail.com</a>
              </li>
              <li className="myinfo-item">
                <span>
                  <AiFillPhone />
                </span>
                <a href="tel:010-2911-4961">010-2911-4961</a>
              </li>
              <li className="myinfo-item">
                <span>
                  <AiFillGithub />
                </span>
                <a
                  href="https://github.com/taewok"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://github.com/taewok
                </a>
              </li>
              <li className="myinfo-item">
                <span>
                  <MdSpeakerNotes />
                </span>
                <a
                  href="https://taewok.github.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://taewok.github.io
                </a>
              </li>
            </ul>
            <div className="myimg-box">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH62fzQwFuoNZKHymSnGCnocX2NzSAiX9t5w&usqp=CAU" />
            </div>
          </div>
        </section>
        <section className="projects-box">
          <h2>Projects</h2>
          <div className="project-box">
            <div className="project-info-box">
              <h3 className="projectname">Gridians</h3>
              <p className="project-period">23.01 ~ 23.02</p>
              <p className="projecturl">
                WedbSite:
                <a href="https://www.gridians.site">
                  https://www.gridians.site
                </a>
              </p>
              <p className="project-github-url">
                GithubSite:
                <a href="https://github.com/gridians/gridians-fe">
                  https://github.com/gridians/gridians-fe
                </a>
              </p>
            </div>
            <div className="project-detail-box">
              <h4>소개</h4>
              <p>개발자을 위한 프로필카드 만들기 및 소통 사이트</p>
              <h4>참여인원</h4>
              <p className="team-members">
                <span>Frontend: 2명</span>
                <span>Backend: 2명</span>
              </p>
              <h4>구현 내용</h4>
              <ul className="role-list">
                <li className="role-item"><b>react-query</b>와 <b>throttle</b>를 사용해 일정 스크롤시 데이터를 추가로 받아오는 무한스크롤</li>
                <li className="role-item"><b>Github Rest API</b>를 활용한 <b>github</b>연동 및 정보 표현</li>
                <li className="role-item">프로필카드 생성 및 수정</li>
                <li className="role-item">유저가 즐겨찾기 한 카드 유무에 따른 css 변화</li>
                <li className="role-item">전반적인 퍼블리싱</li>
              </ul>
              <h4>사용 기술</h4>
              <ul className="role-list">
                <li className="role-item">React</li>
                <li className="role-item">Styled-Components</li>
                <li className="role-item">React-Query</li>
                <li className="role-item">Recoil</li>
                <li className="role-item">React Router</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="skill-box">
          <h2>Skill</h2>
          <h3 className="skill-name">HTML/CSS</h3>
          <ul className="skill-explain-list">
            <li className="skill-explain-item">마크업을 통한 구조적 설계 능력</li>
            <li className="skill-explain-item">웹표준을 고려한 UI 설계</li>
            <li className="skill-explain-item">viewPort에 따른 반응형 적용</li>
          </ul>
          <h3 className="skill-name">JavaScript</h3>
          <ul className="skill-explain-list">
            <li className="skill-explain-item">Vanilla JS 를 통한 DOM 조작</li>
            <li className="skill-explain-item">ES6 문법 사용</li>
          </ul>
          <h3 className="skill-name">React</h3>
          <ul className="skill-explain-list">
            <li className="skill-explain-item">React Hook을 통한 변수 관리와 생명주기 기능을 사용 할 수 있다</li>
            <li className="skill-explain-item">함수형 프로그래밍을 통한 효율적인 컴포넌트 분리</li>
            <li className="skill-explain-item">다양한 라이브러리 응용</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
