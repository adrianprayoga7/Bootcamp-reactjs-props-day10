import React from "react";
import ReactDOM from "react-dom/client";
import { Comment } from 'semantic-ui-react';
import { faker } from '@faker-js/faker';
import 'semantic-ui-css/semantic.min.css';


const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

function App () {
    const data = [
      {
      avatar : faker.image.avatar(),
      name : faker.name.fullName(),
      time : faker.date.past().toDateString(),
      comment : faker.lorem.lines()
    },
    {
      avatar : faker.image.avatar(),
      name : faker.name.fullName(),
      time : faker.date.past().toDateString(),
      comment : faker.lorem.lines()
    }
  ];
  // console.log(data);
  return (
  data.map((datas, i) => {
    return (
      <Comment key={i}>
      <Comment.Avatar src={datas.avatar} />
      <Comment.Content>
        <Comment.Author as='a'>{datas.name}</Comment.Author>
        <Comment.Metadata>
          <div>{datas.time}</div>
        </Comment.Metadata>
        <Comment.Text>{datas.comment}</Comment.Text>
      </Comment.Content>
    </Comment>
      )
    })
  ) 
}




root.render(<App />);

 
