import Content1 from '@/modules/content1';
import Content2 from '@/modules/content2';
import Content3 from '@/modules/content3';
import Content4 from '@/modules/content4';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="md:p-9 xl:p-28  md:mt-[45%] xl:mt-[2%] ">
      <Content1 />
      <Content2/>
      <Content3/>
      <Content4/>
    </div>
  );
}
