import EmbarkHome from '@/assets/embark/embark-home.png';
import EmbarkModules from '@/assets/embark/embark-modules.png';
import EmbarkAdmin from '@/assets/embark/embark-admin.png';

function EmbarkContent() {
  return (
    <>
        <p>
            Embark enables organizations to drive workforce engagement by delivering timely, high-value information across critical topics and at every key touchpoint throughout the employee journey.
        </p>
        <p>
            I was part of Embark's product development team as the main UI Designer & Developer. I was shared across multiple teams that each work on different features across Embark.
        </p>
        <p>
            It was my duty to make sure that development teams were properly following the guidelines and design, set by myself and the rest of the UX team. I worked closely with those teams to provide UI design, solutions and review Ul-related code. I also lead efforts in championing Web Accessibility standards.
        </p>
        <img src={EmbarkHome} />
        <p>
            Embark has 2 main personas, Ned (the employee) and Willis (the admin). The first screen above shows a simple Ned-view of the homepage in desktop. Here we see two modules, Content Slider and Promo Tiles. 
        </p>
        <img src={EmbarkModules} />
        <p>
            There are a lot of different modules for different types of content, and I helped  in building and in maintaining all of them. Even lead the UI design and development in some of the modules, like the Content Block, Accordion, and Vertical Menu. The screens above show how those modules look on mobile.
        </p>
        <img src={EmbarkAdmin} />
        <p>
            The two screens above show how Willis, an admin, would see Embark. An admin menu bar is shown on the left side, containing all the tools and settings needed by Willis.
        </p>
    </>
  )
}

export default EmbarkContent