'use strict'

//問題数
const qNum = 4;

//問題数の大きさの配列用意
let questionArray= [];
for(let counter_e=1;counter_e<=qNum;counter_e++){
    questionArray.push(counter_e);
}

//問題の数だけ、divを生成
const mondai =document.getElementById("mondai");
for(let counter_a=1;counter_a<=qNum;counter_a++){
    //各問div
    const creatediv = document.createElement("div");
    creatediv.id='mondai'+ counter_a;
    mondai.appendChild(creatediv);
    //中にそれぞれ３つdiv作成
    const mondai_content =document.getElementById('mondai'+ counter_a);
    //1
    const creatediv_title = document.createElement("div");
    creatediv_title.id ='qTitle'+ counter_a;
    creatediv_title.className='qTitle';
    mondai_content.appendChild(creatediv_title);
    //2
    const creatediv_que = document.createElement("div");
    creatediv_que.id ='question'+ counter_a;
    creatediv_que.className='question';
    mondai_content.appendChild(creatediv_que);
    //3
    const creatediv_ans = document.createElement("div");
    creatediv_ans.id ='answer'+ counter_a;
    creatediv_ans.className='answer';
    mondai_content.appendChild(creatediv_ans);

    //qTitleに「x問目」と記入
    const createh4_qTitle=document.createElement("h4");
    const tText = document.createTextNode(counter_a+"問目");
    createh4_qTitle.appendChild(tText);
    const qTitleId= document.getElementById('qTitle'+counter_a);
    qTitleId.appendChild(createh4_qTitle);
}

//問題一覧

let question=["問題"];
let answer=["答え"];

function questionRefresh() {

    //１問目
    var rand11=Math.ceil(Math.random()*5)*200; //1-5 *200
    var rand12=Math.floor(Math.random()*10)+1; //1-10
    question[1] = "Aさんが"+rand11+"分間"+rand12+"km/h"+"で走りました。何km走れたでしょうか？"
    answer[1] = rand11*rand12/60+"km";

    //２問目
    var rand21=Math.ceil(Math.random()*5)*200; //1-5 *200
    var rand22=Math.floor(Math.random()*4)*10+30; //3-6 *10
    var rand23=Math.floor(Math.random()*4+1)*5; //1-4 *5
    var rand24=rand21*(100+rand22)*(100-rand23)/10000-rand21
    question[2] = "ある商品について、原価の"+rand22+"%の利益が得られるように定価を設定しました。しかしその商品があまり売れなかったため、後に"+rand23+"%引きで売ったところ、１品あたりの利益は"+rand24+"円になりました。原価はいくらだったでしょうか？"

    answer[2] =rand21+"円";

    question[3] = "The 3rd number is "+ Math.random();
    answer[3] ="answer3"

    question[4] = "The 4th number is "+ Math.random();
    answer[4] ="answer4"

    console.log(question[2],answer[2]);
}

//シャッフル用
const shuffle = ([...array]) => {
    for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}  

//問題生成
let randQNumber;
let randomQuestionArray =[];
function seisei(){
    randomQuestionArray=shuffle(questionArray);
    for(let counter_b=1;counter_b<=qNum;counter_b++){
        randQNumber=randomQuestionArray[counter_b-1];
        const createp_que=document.createElement("p");
        const createp_ans=document.createElement("p");
        questionRefresh();
        const qText = document.createTextNode(question[randQNumber]);
        const aText = document.createTextNode(answer[randQNumber]);
        createp_que.appendChild(qText);
        createp_ans.appendChild(aText);
        const questionNumId =document.getElementById("question"+counter_b);
        const answerNumId =document.getElementById("answer"+counter_b);
        questionNumId.appendChild(createp_que);
        answerNumId.appendChild(createp_ans);
    }
}
seisei();

//更新ボタン
function koushin(){
    //既存を削除
    for(let counter_c=1;counter_c<=qNum;counter_c++){
        const questionRemove =document.getElementById("question"+counter_c);
        questionRemove.removeChild(questionRemove.firstChild);
        const answerRemove =document.getElementById("answer"+counter_c);
        answerRemove.removeChild(answerRemove.firstChild);
    }
    //新たに生成
    seisei();
    
    //答え表示リセット
    var answersw_check=document.getElementById("answer1");
    if(answersw_check.classList.contains("answerhidden_off")){
        for(let counter_f=1;counter_f<=qNum;counter_f++){
            var answerCN = document.getElementById('answer'+counter_f); 
            answerCN.classList.toggle('answerhidden_off');
        }
    }
}

//答え表示ボタン
function answer_onoff(){
    for(let counter_f=1;counter_f<=qNum;counter_f++){
        var answerCN = document.getElementById('answer'+counter_f); 
        answerCN.classList.toggle('answerhidden_off');
    }
　}