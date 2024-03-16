// // NotionPage.jsx
// import { NotionRenderer } from 'react-notion-x';
// import { Client } from '@notionhq/client';

// const NotionPage = () => {
//   const [notionData, setNotionData] = useState(null);

//   useEffect(() => {
//     const notion = new Client({ auth: 'secret_h8pkMnX3QXNwJ4e9r9iuX4RiA7Llz82DOkmXUFq247d',  });

//     const fetchNotionData = async () => {
//       const response = await notion.blocks.retrieve({
//         block: '804a8345-3a87-4503-8bc6-7bb878605243',
//       }, );
//       setNotionData(response);
//     };

//     fetchNotionData();
//   }, []);
// a
//   console.log(notionData);
  
//   return (
//     <div>
//       {notionData && <NotionRenderer recordMap={notionData} />}
//     </div>
//   );
// };

// export default NotionPage;