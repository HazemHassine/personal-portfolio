import React from "react";
import ReactMarkdown from "react-markdown";
import "./MainWin.css";
import remarkGfm from "remark-gfm";
let CONTENT = `

#  About Me:
Hello I'm **<Hazem/>**
I'm a 3rd Computer Science student from Tunisia. Passionate about Machine Learning 🖥️ and Artifical Intelligence 🤖. Always learning new things and working on projects.
Have a tour in my github profile where you'll find projects ranging from a markdown parser in **java** to a Diabetes Prediciton Api in **python** using all kind of python frameworks and technlogies.



##  Socials:
[![Facebook](https://img.shields.io/badge/Facebook-%231877F2.svg?logo=Facebook&logoColor=white)](https://facebook.com/M.Hazem.Hassine) [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://linkedin.com/in/hazem-hassine) [![Stack Overflow](https://img.shields.io/badge/-Stackoverflow-FE7A16?logo=stack-overflow&logoColor=white)](https://stackoverflow.com/users/14524308) 

# 💻 Tech Stack:
![C](https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![LaTeX](https://img.shields.io/badge/latex-%23008080.svg?style=for-the-badge&logo=latex&logoColor=white) ![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Cloudflare](https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white) ![Google Cloud](https://img.shields.io/badge/Google%20Cloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white) ![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white) ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white) ![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase) ![Anaconda](https://img.shields.io/badge/Anaconda-%2344A833.svg?style=for-the-badge&logo=anaconda&logoColor=white) ![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white) ![Django](https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white) ![Electron.js](https://img.shields.io/badge/Electron-191970?style=for-the-badge&logo=Electron&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi) ![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE) ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black) ![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![Canva](https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white) 	![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white) ![Keras](https://img.shields.io/badge/Keras-%23D00000.svg?style=for-the-badge&logo=Keras&logoColor=white) ![NumPy](https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white) ![Pandas](https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white) ![Plotly](https://img.shields.io/badge/Plotly-%233F4F75.svg?style=for-the-badge&logo=plotly&logoColor=white) ![PyTorch](https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white) ![scikit-learn](https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white) ![SciPy](https://img.shields.io/badge/SciPy-%230C55A5.svg?style=for-the-badge&logo=scipy&logoColor=%white) ![TensorFlow](https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white) ![Kubernetes](https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white) ![CMake](https://img.shields.io/badge/CMake-%23008FBA.svg?style=for-the-badge&logo=cmake&logoColor=white)
# 📊 GitHub Stats:
![](https://github-readme-stats.vercel.app/api?username=HazemHassine&theme=dark&hide_border=false&include_all_commits=true&count_private=true)
![](https://github-readme-streak-stats.herokuapp.com/?user=HazemHassine&theme=dark&hide_border=false)
![](https://github-readme-stats.vercel.app/api/top-langs/?username=HazemHassine&theme=dark&hide_border=false&include_all_commits=true&count_private=true&layout=compact)

### ✍️ Random Dev Quote
![](https://quotes-github-readme.vercel.app/api?type=horizontal&theme=dark)`;

export default function MainWin() {
  return (
    <div className="mainwin">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{CONTENT}</ReactMarkdown>
    </div>
  );
}
