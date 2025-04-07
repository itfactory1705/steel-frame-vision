
import React, { useState } from 'react';
import { cn } from "@/lib/utils";

const projectCategories = [
  "Все", "Промышленные", "Коммерческие", "Логистические", "Сельскохозяйственные"
];

const projectsData = [
  {
    id: 1,
    title: "Производственный цех",
    category: "Промышленные",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Металлокаркасный производственный цех площадью 2500 м²"
  },
  {
    id: 2,
    title: "Торговый центр",
    category: "Коммерческие",
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Двухэтажный торговый центр с панорамным остеклением"
  },
  {
    id: 3,
    title: "Логистический комплекс",
    category: "Логистические",
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Современный логистический центр с административным зданием"
  },
  {
    id: 4,
    title: "Зернохранилище",
    category: "Сельскохозяйственные",
    image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Комплекс зернохранилищ общей вместимостью 15000 тонн"
  },
  {
    id: 5,
    title: "Промышленный хаб",
    category: "Промышленные",
    image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Многофункциональный промышленный комплекс для нескольких производств"
  },
  {
    id: 6,
    title: "Выставочный павильон",
    category: "Коммерческие",
    image: "https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    description: "Павильон для выставок и конференций с уникальной архитектурой"
  }
];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Все");

  const filteredProjects = activeCategory === "Все" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section bg-steel-100">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Наши проекты</h2>
          <p className="section-subtitle mx-auto">
            Реализованные объекты из металлоконструкций различного назначения и масштаба
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {projectCategories.map(category => (
            <button
              key={category}
              className={cn(
                "px-4 py-2 rounded-md transition-colors",
                activeCategory === category 
                  ? "bg-accent-orange text-white" 
                  : "bg-white text-steel-700 hover:bg-steel-200"
              )}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-steel-800">{project.title}</h3>
                  <span className="text-xs bg-steel-200 text-steel-700 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-steel-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center mt-12">
          <button className="btn-secondary">
            Смотреть все проекты
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
