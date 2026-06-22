import React from 'react'
import { 
  FaFigma, FaJava, FaJs, FaPython, FaPhp, FaReact, FaNodeJs, FaDocker, FaGitAlt 
} from "react-icons/fa";
import { PiFileCSharp } from "react-icons/pi";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { 
  SiDjango, SiTailwindcss, SiMongodb, SiAdobephotoshop, 
  SiAdobeillustrator, SiKubernetes
} from "react-icons/si";
import { TbBrandMysql, TbBrandGithub } from "react-icons/tb";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const Section4 = () => {
  const { t } = useTranslation();

  const Badge = ({ icon, label }) => (
    <div className="flex items-center gap-[10px] px-4 py-[9px] rounded-full text-[14px] font-medium border border-[#1E3A4A] bg-[#0a141a] text-gray-200 cursor-default hover:border-[#2A4A5A] transition-all duration-300">
      <span className="text-[18px] text-[#00BBFF] flex-shrink-0 leading-none">{icon}</span>
      <span className="leading-none">{label}</span>
    </div>
  );

  const CategoryCard = ({ title, children }) => (
    <div className="bg-[#0D1B22] border border-[#1E3A4A] rounded-2xl p-7 flex flex-col gap-5 hover:border-[#2A4A5A] transition-all duration-300">
      <div className="flex items-center gap-3">
        <div className="w-[3px] h-7 rounded-full bg-[#00BBFF] flex-shrink-0"></div>
        <h3 className="text-[17px] font-semibold text-white tracking-tight">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-[10px]">{children}</div>
    </div>
  );

  const categories = [
    {
      title: t('section4.competence1'),
      items: [
        { icon: <FaJava />, label: 'Java' },
        { icon: <PiFileCSharp />, label: 'C#' },
        { icon: <FaPhp />, label: 'PHP' },
        { icon: <FaJs />, label: 'JavaScript' },
        { icon: <FaPython />, label: 'Python' },
        { icon: <BiLogoTypescript />, label: 'TypeScript' },
      ]
    },
    {
      title: t('section4.competence2'),
      items: [
        { icon: <FaReact />, label: 'ReactJS' },
        { icon: <SiDjango />, label: 'Django' },
        { icon: <FaNodeJs />, label: 'NodeJS' },
        { icon: <SiTailwindcss />, label: 'TailwindCSS' },
      ]
    },
    {
      title: t('section4.competence3'),
      items: [
        { icon: <TbBrandMysql />, label: 'MySQL' },
        { icon: <BiLogoPostgresql />, label: 'PostgreSQL' },
        { icon: <SiMongodb />, label: 'MongoDB' },
      ]
    },
    {
      title: t('section4.competence4'),
      items: [
        { icon: <SiAdobephotoshop />, label: 'Adobe Photoshop' },
        { icon: <SiAdobeillustrator />, label: 'Adobe Illustrator' },
        { icon: <FaFigma />, label: 'Figma' },
      ]
    },
    {
      title: 'DevOps & Tools',
      items: [
        { icon: <FaDocker />, label: 'Docker' },
        { icon: <SiKubernetes />, label: 'Kubernetes' },
        { icon: <FaGitAlt />, label: 'Git' },
        { icon: <TbBrandGithub />, label: 'GitHub' },
      ]
    }
  ];



  return (
    <div id="s4">
      <div className='relative text-white flex h-auto items-center flex-col pt-[90px] pb-20 bg-[#141C21] w-full overflow-hidden md:pt-[80px]'>

        {/* Titre */}
        <div className='relative z-10 w-[90%] mb-12'>
          <div className='text-[22px] text-white audio'>
            {t('section4.grandTitre')}
          </div>
          <motion.div
            className='bg-[#00BBFF] h-[3px] mt-[10px] rounded-full'
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "100px", opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
        </div>

        <div className='relative z-10 w-[90%] flex flex-col gap-6'>

          {/* Grille des catégories */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {categories.map((cat, idx) => (
              <CategoryCard key={idx} title={cat.title}>
                {cat.items.map((item, i) => (
                  <Badge key={i} icon={item.icon} label={item.label} />
                ))}
              </CategoryCard>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Section4;