import Apir1 from '@/assets/apir/apir-1.gif';
import Apir2 from '@/assets/apir/apir-2.jpg';

function ApirContent() {
  return (
    <>
        <p>
            APIR was a platform for Willis Towers Watson colleagues to recognize each other by giving out “Kudos” points. Earned points can then be exchanged to rewards like exclusive company merchandise or gift certificates.
        </p>
        <p>
            I was part of a small team that worked on APIR redesign with my role being the UI Designer and Developer. My main concept for the site was to make it look fun and light-hearted. Employees work all day in front of their screens with data, code, or numbers, so I wanted APIR to be a refreshing break from that. 
        </p>
        <img src={Apir1} />
        <p>
            The screen above shows the flow from the 'Kudos Feed' to the 'Give Kudos' screen.
        </p>
        <img src={Apir2} />
        <p>
            The screen above shows what a user sees when they open a Kudos Card.
        </p>
    </>
  )
}

export default ApirContent