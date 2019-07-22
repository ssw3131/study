import React from 'react';

class Sidebar extends React.Component {

  render() {
    const props = this.props;

    return (
      <ul>
        <li>{props.id} / {props.title}</li>
      </ul>
    );
  }
}

class PostItem extends React.Component {

  render() {
    const props = this.props;

    return (
      // <div key={props.key}>
      // 틀렸습니다! 여기에는 key를 지정할 필요가 없습니다.
      <div>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
      </div>
    );
  }
}

class Blog extends React.Component {

  render() {
    const posts = this.props.posts;
    const SidebarItems = posts.map(
      post => <Sidebar key={post.id} id={post.id} title={post.title} />
    );
    // const PostItems = posts.map(
    //   post => <PostItem key={post.id} title={post.title} content={post.content} />
    // );
    // JSX 안에서 표현식을 사용할 수 도 있다

    return (
      <div>
        {SidebarItems}
        <hr />
        {posts.map(
          post => <PostItem key={post.id} title={post.title} content={post.content} />
        )}
      </div>
    );
  }
}

const posts = [
  { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
  { id: 2, title: 'Installation', content: 'You can install React from npm.' }
];

class MainConcept8 extends React.Component {

  render() {
    return (
      <Blog posts={posts} />
    );
  }
}

export default MainConcept8;
