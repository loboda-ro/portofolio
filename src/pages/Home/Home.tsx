import { HeroComponent } from "../../components/Home/HeroComponent"
import { InfoComponent } from "../../components/Home/InfoComponent"
import { ProjectComponent } from "../../components/Home/ProjectsComponent"
import { TechnologiesComponent } from "../../components/Home/TechnologiesComponent"

interface HomeProps {
  activeTab: 'work' | 'info';
}

export const Home = ({ activeTab }: HomeProps) => {
    if (activeTab === 'info') {
        return <InfoComponent />;
    }
    return (
        <div>
            <HeroComponent/>
            <TechnologiesComponent/>
            <ProjectComponent/>
        </div>
    )
}