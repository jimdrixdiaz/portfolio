import MyBos1 from '@/assets/mybos/mybos-1.gif';
import MyBos2 from '@/assets/mybos/mybos-2.gif';
import MyBos3 from '@/assets/mybos/mybos-3.gif';

function MyBosContent() {
  return (
    <>
        <p>
            My Customer Manager was a portal for Maya’s customer support team. The project was a total redesign from an outdated tool they were using that had a lot of features but lack of categorization. Every task had its own page and the goal was to make it easier for users to navigate the site and finish tasks.
        </p>
        <p>
            As the UX/UI designer for this project, I lead the whole design process from research, wire-framing, prototyping, to even helping with the frontend development. I was able to simplify their process by analyzing and properly categorizing all of the features, and I also talked to actual employees that would use the product as part of my research. My design was simple while still having all the functionalities that the customer support team needed. Ultimately, we built a more efficient product that not only helped the customer support team, but also the end-users or actual customers of Maya.
        </p>
        <p>
            This screen shows the flow from searching for an account to opening the account details.
        </p>
        <img src={MyBos1} />
        <p>The screen below shows the flow for editing account details.</p>
        <img src={MyBos2} />
        <p>This shows the flow for looking up an account's transactions.</p>
        <img src={MyBos3} />
    </>
  )
}

export default MyBosContent