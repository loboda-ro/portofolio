import { HeroComponent } from "../../components/Home/HeroComponent"
import { ProjectComponent } from "../../components/Home/ProjectsComponent"
import { TechnologiesComponent } from "../../components/Home/TechnologiesComponent"

export const Home = () => {
    return (
        <div>
            <HeroComponent/>
            <TechnologiesComponent/>
            <ProjectComponent/>
        </div>
        
    )
}