const app = Vue.createApp({
  data() {
    return {
      msg:'<h1>About</h1><p>I Do Web Design & Developement since I was 18 Years Old Developement since I was 18 Years Old</p>',
    /*   p1:'<h1>About</h1><p>I Do Web Design & Developement since I was 18 Years Old</p>',
      p2:'<h1>Skills</h1><p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, </p>',
      p3:'<h1>Art</h1><p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>', */
    };
  },
  methods: {
    fun1(){
      return this.msg='<h1>About</h1><p>I Do Web Design & Developement since I was 18 Years Old Developement since I was 18 Years Old</p>';
     /*  if (event.id === "about")
      {
        return this.msg='<h1>About</h1><p>I Do Web Design & Developement since I was 18 Years Old</p>';
      }
      else if (event.id === "skill")
      {
        return this.msg='<h1>Skills</h1><p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, </p>';
      }
      else if (event.id === "expe")
      {
        return  this.msg='<h1>Art</h1><p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>';
      } */
    },
    fun2(){
      return this.msg='<h1>Skills</h1><p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, </p>';
    },
    fun3(){
      return  this.msg='<h1>Art</h1><p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>';
    }
    }}).mount('.detail');
    
  

/* function changec(elem) {
    let box =document.getElementById('para1') ;
    let box1 =document.getElementById('para2') ;
    if (elem.id == "about") {
      box.textContent = "My Story";
      box1.textContent = " LoremLoremLoremLoremLoreLoremLoremLoremLoremLoremLoremvLoremLoremLoremLoremLoremLoremLoremLorem";
    } else if (elem.id == "skill") {
        box.textContent = "Skills";
        box1.textContent="SkillsSkillskillsSkillsSkillsSkillsSkillsSkillsvSkillsSkillkillsSkillsSkillsSkillsSkillsSkillsSkills "
    }
    else if (elem.id == "expe") {
        box.textContent = "Art and Design";
        box1.textContent="ArtandDesignArtandDesignArtanDesignArtandDesignArtandDesignArtandDesignArtandDesignArtandDesignArtandDesign "
      } else {
        box.textContent = "My Story";
    };
  } */