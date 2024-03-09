import './App.css';

import React from "react";
import { HashRouter as Router, Routes, Route  } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SkillPage from './pages/SkillPage';
import ProjectsPage from './pages/ProjectsPage';
import ExperiencePage from './pages/ExperiencePage';
import EducationPage from './pages/EducationPage';
import ResumePage from './pages/ResumePage';
import mau from './assets/MadonnaUniversityNigeria.png';

const myname = 'Oscar Oguledo';
// Sample data for skills (replace with your actual skill data)
const skills = [
  { title: 'React', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/320px-React-icon.svg.png' },
  { title: 'JavaScript', img: 'https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png' },
  { title: 'Python', img: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
  { title: 'Bash', img: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Gnu-bash-logo.svg' },
  { title: 'C', img: 'https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png' },
  { title: 'C++', img: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg' },
  { title: 'C#', img: 'https://static-00.iconduck.com/assets.00/c-sharp-c-icon-1822x2048-wuf3ijab.png' },
  { title: 'AWS', img: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
  { title: 'Django', img: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg' },
  { title: 'GitHub', img: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' },
  { title: 'GitLab', img: 'https://about.gitlab.com/images/new_logo/A.jpg' },
  { title: 'Postman', img : 'https://www.svgrepo.com/show/354202/postman-icon.svg'},
  { title: 'PythonAnywhere', img: 'https://www.pythonanywhere.com/static/anywhere/images/PA-logo.svg' },
  { title: 'DigitalOcean', img: 'https://static-00.iconduck.com/assets.00/digitalocean-icon-1024x1024-c12wv3si.png' },
  { title: 'Bootstrap', img: 'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png' },
  { title: 'HTML', img: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
  { title: 'CSS', img: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
  { title: 'Ant Design', img: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg' },
  { title: 'MySQL', img: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png' },
  { title: 'SQLite', img: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Sqlite-square-icon.svg' },
  { title: 'PostgreSQL', img: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg' },
  { title: 'MongoDB', img: 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg' },
  { title: 'Java', img: 'https://cdn-icons-png.freepik.com/512/5968/5968282.png' },
  { title: 'Matplotlib', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Created_with_Matplotlib-logo.svg/2048px-Created_with_Matplotlib-logo.svg.png' },
  { title: "Numpy",img:'https://cdn.worldvectorlogo.com/logos/numpy-1.svg'}
];
const schools=[
  { title: 'ICC', img: 'https://immaculateconceptioncollege.com/sitepad-data/uploads/2023/01/ICC-LOGO.jpg' },
  { title: 'MAU', img: mau },
  { title: 'HWU', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Heriot-Watt_University_logo.svg/2560px-Heriot-Watt_University_logo.svg.png' },
]
const experiences = [
  {
    company: 'Dowell Research Institute, India',
    logo:"https://i0.wp.com/dowellresearch.uk/wp-content/uploads/2018/07/logo-e1531386713115.png?fit=365%2C247&ssl=1",
    position: 'Software Engineer',
    duration: 'April 2023 - Current',
    description: 'Designed, developed, and maintained high-quality software solutions to meet organizational and client needs.',
  },
  {
    company: 'Freelancing, Upwork',
    logo:"https://i.imgur.com/AbcCoLogo.png",
    position: 'Software Engineer',
    duration: 'Jan 2019 - Dec 2021',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum nec metus pretium commodo.',
  },
  {
    company: 'Nigerian National Petroleum Corporation Ltd, Benin City, Nigeria',
    logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Nigerian_National_Petroleum_Company_logo.svg/220px-Nigerian_National_Petroleum_Company_logo.svg.png",
    position: 'Web Developer/IT personel',
    duration: 'Feb 2021 - October 2021',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum nec metus pretium commodo.',
  },
  {
    company: 'Tech Solutions Ltd.',
    logo:"https://i.imgur.com/TechSolutionsLogo.png",
    position: 'Frontend Developer',
    duration: 'Mar 2015 - Apr 2017',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum nec metus pretium commodo.',
  },
  {
    company: 'Global Innovations Inc.',
    logo:"https://i.imgur.com/GlobalInnovationsLogo.png",
    position: 'Senior Developer',
    duration: 'Jun 2012 - Feb 2015',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum nec metus pretium commodo.',
  },
  {
    company: 'Tech Solutions Ltd.',
    logo:"https://i.imgur.com/TechSolutionsLogo.png",
    position: 'Frontend Developer',
    duration: 'Mar 2015 - Apr 2017',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum nec metus pretium commodo.',
  },
  {
    company: 'Global Innovations Inc.',
    logo:"https://i.imgur.com/GlobalInnovationsLogo.png",
    position: 'Senior Developer',
    duration: 'Jun 2012 - Feb 2015',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum nec metus pretium commodo.',
  },
];

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage myname={myname} skills={skills} />} exact ></Route>
          <Route path="/skills" element={<SkillPage myname={myname} skills={skills} />} exact ></Route>
          <Route path="/projects" element={<ProjectsPage myname={myname}/>} exact ></Route>
          <Route path="/experience" element={<ExperiencePage myname={myname} experiences={experiences} />} exact ></Route>
          <Route path="/education" element={<EducationPage myname={myname} schools={schools}/>} exact ></Route>
          <Route path="/resume" element={<ResumePage myname={myname} />} exact ></Route>
        </Routes>
    </Router>
  );
}

export default App;
