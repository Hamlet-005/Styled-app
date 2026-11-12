import { useState } from 'react'
import { StyleNavigation } from '../../components/StyleNavigation'
import {
  Card,
  Close,
  Grid,
  Head,
  Hero,
  Marquee,
  Modal,
  ModalBox,
  Page,
  Sticker,
  Tabs,
  Work,
} from './styled'

interface Project {
  name: string
  category: string
  color: string
}

const projects: Project[] = [
  { name: 'LOUDER', category: 'ALL', color: '#ed4d2e' },
  { name: 'NOISE', category: 'TYPE', color: '#61b5ff' },
  { name: 'REAL /', category: 'WEB', color: '#ffdf00' },
  { name: 'NEW FORM', category: 'ALL', color: '#a9d8a5' },
]

const projectCategories = ['ALL', 'TYPE', 'WEB']

export function Brutalist() {
  const [selectedCategory, setSelectedCategory] = useState('ALL')
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  const filteredProjects = projects.filter((project) => {
    return (
      selectedCategory === 'ALL' || project.category === selectedCategory
    )
  })

  return (
    <Page>
      <StyleNavigation theme="brutal" brand="UNIT/UN" />

      <Hero>
        <Head>
          Make<br />
          <span>noise.</span>
        </Head>
        <Sticker>
          INDEPENDENT CREATIVE OFFICE<br />
          STRATEGY · IDENTITY · DIGITAL<br />
          BOOKING SELECTED 2026 PROJECTS
        </Sticker>
      </Hero>

      <Marquee>
        BRANDS WITH A POINT OF VIEW ✶ STRATEGY ✶ DESIGN ✶ DIGITAL EXPERIENCES
        ✶ BRANDS WITH A POINT OF VIEW ✶
      </Marquee>

      <Work>
        <Tabs>
          {projectCategories.map((category) => (
            <button
              className={selectedCategory === category ? 'active' : ''}
              key={category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </Tabs>

        <Grid>
          {filteredProjects.map((project) => (
            <Card
              key={project.name}
              $color={project.color}
              onClick={() => setSelectedProject(project.name)}
            >
              <span>PROJECT / {project.category}</span>
              <h3>{project.name}</h3>
            </Card>
          ))}
        </Grid>
      </Work>

      {selectedProject && (
        <Modal role="dialog" onClick={() => setSelectedProject(null)}>
          <ModalBox onClick={(event) => event.stopPropagation()}>
            <Close onClick={() => setSelectedProject(null)}>X</Close>
            <span>SELECTED PROJECT</span>
            <h2>{selectedProject}</h2>
            <p>
              A deliberately loud identity built to disrupt, connect and refuse
              the expected.
            </p>
          </ModalBox>
        </Modal>
      )}
    </Page>
  )
}