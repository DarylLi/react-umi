import yayJpg from '../assets/yay.jpg';

export default function HomePage() {
  return (
    <div>
      <h2>欢迎进入测试页面,react项目~</h2>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}
