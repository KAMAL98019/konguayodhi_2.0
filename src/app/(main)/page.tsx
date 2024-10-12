import Content1 from '@/modules/content1';
import Content2 from '@/modules/content2';
import Content3 from '@/modules/content3';
import Content4 from '@/modules/content4';
import Image from 'next/image';

export default function Home() {
  return (
    <div className=" max-small:mt-[28%] p-[14%] relative max-small:p-[7%]">
      <Content1 />
       <Content2/>
      <Content3/>
      <Content4/>
    </div>
  );
}
