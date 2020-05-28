/******************************************************* 

vsc 브랜치 이름 확인.
이름 브랜치에서 작업을 해야....
merge가 되면 master로 가서(로컬)
origin master를 pull 해야함
>> 최신화하고
>> 브랜치 이동해서
>> 변경사항을 적용해야함.
push할 때 항상. 
git pull origin master >> 최신화.최신화.최신화.(로컬마스터에서)
git merge master(내 로컬 마스터랑 오리진 마스터를 병합)



import React from "react";
import "./App.css";



class App extends React.Component{
    constructor(){
        super();

        this.state = {};
    }

    render() {
        return <div className="App">Hello</div>
    }
}

export defalut App;



MockData 만드는 법.
1. js 파일로 만들어서 import
2. json 파일로 만들어서 fetch하기

json 파일의 키값은 언제나 ""
제일 부모가 되는 키값.("data")

fetch("/data/data.json")
    .then(res => res.json());
    .then(res => console.log(res));


***********************************************************/