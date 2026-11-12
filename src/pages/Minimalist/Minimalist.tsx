import { useState } from 'react'
import { StyleNavigation } from '../../components/StyleNavigation'
import {
  Action,
  Card,
  Close,
  Eyebrow,
  Grid,
  Hero,
  Image,
  Intro,
  Meta,
  Modal,
  ModalBox,
  Page,
  Tab,
  Tabs,
  Title,
  Toolbar,
  Work,
} from './styled'

interface Project {
  name: string
  type: string
  image: string
}

const projects: Project[] = [
  {
    name: 'Noma House',
    type: 'Identity',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=900',
  },
  {
    name: 'Lumen Space',
    type: 'Digital',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900',
  },
  {
    name: 'Forma Objects',
    type: 'Product',
    image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=900',
  },
]

const projectTypes = ['All', 'Identity', 'Digital', 'Product']

export function Minimalist() {
  const [filter, setFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = projects.filter((project) => {
    return filter === 'All' || project.type === filter
  })

  function showWork() {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Page>
      <StyleNavigation theme="minimalist" brand="North/Studio" />

      <Hero>
        <div>
          <Eyebrow>Independent design practice · Copenhagen / London</Eyebrow>
          <Title>
            Quiet<span>Ideas.</span>
          </Title>
        </div>
        <Intro>
          <p>
            North Studio creates precise identities, digital products and
            considered environments for organizations with a lasting point of
            view.
          </p>
          <Action onClick={showWork}>View selected work ↓</Action>
        </Intro>
      </Hero>

      <Work id="work">
        <Toolbar>
          <Eyebrow>Selected projects</Eyebrow>
          <Tabs>
            {projectTypes.map((projectType) => (
              <Tab
                key={projectType}
                $active={filter === projectType}
                onClick={() => setFilter(projectType)}
              >
                {projectType}
              </Tab>
            ))}
          </Tabs>
        </Toolbar>

        <Grid>
          {filteredProjects.map((project) => (
            <Card
              key={project.name}
              onClick={() => setSelectedProject(project)}
            >
              <Image src={project.image} alt={project.name} />
              <Meta>
                <h3>{project.name}</h3>
                <span>{project.type}</span>
              </Meta>
            </Card>
          ))}
        </Grid>
      </Work>

      {selectedProject && (
        <Modal role="dialog" onClick={() => setSelectedProject(null)}>
          <ModalBox onClick={(event) => event.stopPropagation()}>
            <Close onClick={() => setSelectedProject(null)}>×</Close>
            <Eyebrow>Case study · {selectedProject.type}</Eyebrow>
            <h2>{selectedProject.name}</h2>
            <p>
              A refined visual system balancing strategic clarity, useful
              simplicity and lasting character.
            </p>
          </ModalBox>
        </Modal>
      )}
    </Page>
  )
}