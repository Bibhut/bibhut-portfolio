import { AboutSection } from "../components/AboutSection"
import { HeroSection } from "../components/HeroSection"
import { Navbar } from "../components/Navbar"
import { ProjectsSection } from "../components/ProjectSection"
import { SkillsSection } from "../components/SkillsSection"
import { StarBackground } from "../components/StartBackground"
import { ThemeToggle } from "../components/ThemeToggle"


export const HomePage = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

         {/* Theme Toggle */}

         <ThemeToggle />

         {/* Background effects */}
         <StarBackground />
         {/* NavBar */}
         <Navbar />
          {/* Main Content */}
        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
        </main>
          {/* Footer */}
    </div>
}