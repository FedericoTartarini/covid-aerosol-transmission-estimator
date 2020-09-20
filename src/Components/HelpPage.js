import React from "react";
import { Helmet } from "react-helmet";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function HelpPage({ match }) {
  function HelpText({ id }) {
    if (id === "length" || id === "width" || id === "height") {
      return (
        <div>
          <h1 className="title-font sm:text-4xl text-3xl text-center mb-4 capitalize font-medium">
            {id}
          </h1>
          <div className="mt-4">
            <p className="mb-8 leading-relaxed">
              Please enter the {id} of the room in meters. You can convert the{" "}
              {id} from ft to meter by multiplying the {id} in ft by 0.305.
            </p>
          </div>
        </div>
      );
    } else if (id === "durationEvent") {
      return (
        <div>
          <h1 className="title-font sm:text-4xl text-3xl text-center mb-4 capitalize font-medium">
            Duration of the Event
          </h1>
          <div className="mt-4">
            <p className="mb-8 leading-relaxed">
              Please enter a duration for the event you are planning for, in
              minutes. For example, if it is a one-hour lecture, it would be 60
              minutes. An eight-hour office day would be 480 minutes.{" "}
            </p>
          </div>
        </div>
      );
    } else if (id === "repetitionEvent") {
      return (
        <div>
          <h1 className="title-font sm:text-4xl text-3xl text-center mb-4 capitalize font-medium">
            Repetitions of the Event
          </h1>
          <div className="mt-4">
            <p className="mb-8 leading-relaxed">
              Please enter the number of times the same person will be attending
              this event. Since the situation with the virus continues to be
              highly dynamic, you could try estimating initially for the number
              of repetitions over the coming week and then reevaluate at the
              beginning of the next week. For example, if you are planning for
              your office staff and everyone comes in every day of the week, for
              a seven-day horizon, the number of repetitions would be 5 (five
              weekdays). If 50% of your staff come in only for two days in the
              week - maybe due to current restrictions, the number of
              repetitions would be 2 for a horizon of one week. Similarly, for a
              horizon of a whole semester, the lectures that would be delivered,
              say, 40 times over the entire semester will need to be put in as
              40 repetitions.{" "}
            </p>
          </div>
        </div>
      );
    } else if (id === "CADRPurifier") {
      return (
        <div>
          <h1 className="title-font sm:text-4xl text-3xl text-center mb-4 capitalize font-medium">
            CADR of air purifiers (m<sup>3</sup>/h)
          </h1>
          <div className="mt-4">
            <p className="mb-8 leading-relaxed">
              CADR stands for clean air delivery rate. This varies with each
              brand and make of air purifier. What this depends on how good a
              filter the purifier has and how much air it can push through this
              filter. Manufacturers provide CADR for their products for
              different particle ranges. Use the rating given for smoke or dust.
              If the value is given CFM (cubic feets per minute), you can
              convert it to CMH by multiplying it by 1.7 (approx).
            </p>
          </div>
        </div>
      );
    } else if (id === "numberPurifiers") {
      return (
        <div>
          <h1 className="title-font sm:text-4xl text-3xl text-center mb-4 capitalize font-medium">
            Number of air purifiers
          </h1>
          <div className="mt-4">
            <p className="mb-8 leading-relaxed">
              This refers to the number of portable air purifiers you may have
              located in a room. Portable air purifiers help by locally cleaning
              the air and good ones - ones with HEPA filters - can filter out
              virus laden particles from the volume of air they process It is
              advisable to position the air purifier towards the middle of the
              occupied portion of a room. And make sure that they are not
              directly blowing air across the occupants. Avoid air purifiers
              with extra add-ons like UV light, ionizers, etc. Just one with a
              good filter is a very sensible choice.
            </p>
          </div>
        </div>
      );
    } else if (id === "activity") {
      return (
        <div>
          <h1 className="title-font sm:text-4xl text-3xl text-center mb-4 capitalize font-medium">
            Activity Type
          </h1>
          <div className="mt-4">
            <p className="mb-8 leading-relaxed">
              We have listed here a list of approximations for some typical
              activity levels. Based on the selection you make from this list,
              we estimate the breathing rate (from the tables below) of
              occupants and the rate at which an infected person may be exhaling
              infectious quanta. You may not find your exact activity level, in
              that case, try to choose something that closely resembles what
              your occupants would be doing. For example, office work could be
              close to Quiet working, Seated, while a small office meeting could
              be Speaking, Seated, and a large, crowded meeting could require
              Speaking loudly, Seated.
            </p>
            <img
              className="mb-10 object-cover object-center rounded-lg shadow-lg"
              alt="hero"
              src={require("../Static/Images/breathing_rate.png")}
            />
            <img
              className="object-cover object-center rounded-lg shadow-lg"
              alt="hero"
              src={require("../Static/Images/breathing_rate_2.png")}
            />
            <p className="mb-8 text-sm leading-relaxed">
              Source:{" "}
              <p className="mb-8 leading-relaxed">
                https://www.epa.gov/expobox/exposure-factors-handbook-chapter-6
              </p>
            </p>
          </div>
        </div>
      );
    } else if (id === "ageGroup") {
      return (
        <div>
          <h1 className="title-font sm:text-4xl text-3xl text-center mb-4 capitalize font-medium">
            Age Group
          </h1>
          <div className="mt-4">
            <p className="mb-8 leading-relaxed">
              We have listed here a range of age groups. Choose the age group
              that most closely matches your occupant demographics. Age, along
              with activity type, is used to estimate the breathing rate (from
              the tables below) of occupants and the rate at which an infected
              person may be exhaling infectious quanta.
            </p>
            <img
              className="mb-10 object-cover object-center rounded-lg shadow-lg"
              alt="hero"
              src={require("../Static/Images/breathing_rate.png")}
            />
            <img
              className="object-cover object-center rounded-lg shadow-lg"
              alt="hero"
              src={require("../Static/Images/breathing_rate_2.png")}
            />
          </div>
        </div>
      );
    } else if (id === "people") {
      return (
        <div>
          <h1 className="title-font sm:text-4xl text-3xl text-center mb-4 capitalize font-medium">
            Number of People
          </h1>
          <div className="mt-4">
            <p className="mb-8 leading-relaxed">
              Please enter the number of occupants in the room/space you are
              examining here.
            </p>
          </div>
        </div>
      );
    } else if (id === "numberInfected") {
      return (
        <div>
          <h1 className="title-font sm:text-4xl text-3xl text-center mb-4 capitalize font-medium">
            Number of People Infected
          </h1>
          <div className="mt-4">
            <p className="mb-8 leading-relaxed">
              Please enter the number of people you suspect could be infected,
              during a typical event you are examining, here. You could always
              start with the assumption that at least one person is infected to
              then examine possibility of other occupants in the same space
              getting infected.
            </p>
          </div>
        </div>
      );
    } else if (id === "perPeopleMask") {
      return (
        <div>
          <h1 className="title-font sm:text-4xl text-3xl text-center mb-4 capitalize font-medium">
            Percentage People with Mask (%)
          </h1>
          <div className="mt-4">
            <p className="mb-8 leading-relaxed">
              This, along with the mask type you select is used to estimate the
              contribution of masks in stopping infected quanta - from the
              patients - affecting the healthy/susceptible people in the room. A
              hundred percent of occupants wearing the masks properly is always
              safest. You can examine, for your specific case, how things change
              if a certain fraction of the occupants are being non-compliant.
            </p>
          </div>
        </div>
      );
    } else if (id === "percentageHospitalizationRate") {
      return (
        <div>
          <h1 className="title-font sm:text-4xl text-3xl text-center mb-4 capitalize font-medium">
            Hospitalization Rate (%)
          </h1>
          <div className="mt-4">
            <p className="mb-8 leading-relaxed">
              Hospitalization rate is also a parameter specific to the severity
              of the outbreak in your community. It estimates the fraction of
              people, of the total number of infected people, who develop a
              serious enough affliction to get admitted into hospitals. An
              estimate of 20% is used by default.
            </p>
          </div>
        </div>
      );
    } else if (id === "percentageDeathRate") {
      return (
        <div>
          <h1 className="title-font sm:text-4xl text-3xl text-center mb-4 capitalize font-medium">
            Death Rate (%)
          </h1>
          <div className="mt-4">
            <p className="mb-8 leading-relaxed">
              Death rate is again a parameter specific to the severity of the
              outbreak in your community. This is the number of deaths reported,
              as a fraction of the total number of cases reported. Depending on
              the intensity of outbreak and what age group of persons have been
              worst affected, death rates can vary substantially. A default
              estimate of 1% is used.
            </p>
          </div>
        </div>
      );
    } else if (id === "pBeingInfected") {
      return (
        <div>
          <h1 className="title-font sm:text-4xl text-3xl text-center mb-4 capitalize font-medium">
            Probability of Being Infected (%)
          </h1>
          <div className="mt-4">
            <p className="mb-8 leading-relaxed">
              This is an estimation of the number of people in your community
              who are infectious as a fraction of the total population of your
              community. This parameter is not easy to quantify accurately, but
              one can hope to get the order-of-magnitude right from the disease
              prevalence data and/or the epidemiological models. Remember that
              infectious/contagious is different from infected numbers. People
              are thought to be contagious mostly the week around the onset of
              symptoms, so that has to be taken into account in the estimates.
              Also, there is a fraction of undetected contagious cases
              (asymptomatic / presymptomatic), which will increase transmission.
              Plus one would hope that a major fraction of the cases that are in
              quarantine or a hospital and not transmitting the disease much.
              The uncertainty on the fraction of contagious individuals in the
              community is one more reason why the absolute risk values will be
              uncertain, but the relative risks will still be robust. An
              in-between value of 0.3% is used as default, as the approx.
              geometric mean of the results below.
            </p>
            <p className="mb-8 leading-relaxed">
              Data would be specific to your own region. For example, for the
              US, for different counties, you can{" "}
              <a
                href={
                  "https://sites.google.com/compassfortcollins.org/coronavirusrisk/home"
                }
              >
                get some quick estimates from this webpae.
              </a>
            </p>
          </div>
        </div>
      );
    } else if (id === "roomACH") {
      return (
        <div>
          <h1 className="title-font sm:text-4xl text-3xl text-center mb-4 capitalize font-medium">
            Air Changes per Hour
          </h1>
          <div className="mt-4">
            <p className="mb-8 leading-relaxed">
              This refers to the total amount of air that is delivered to your
              room. This should be provided to you by your building services
              engineer/building management office. To specify again, this is the
              total volume of air delivered, which is a mix of outdoor air and
              some of the room air being recirculated back into the room to save
              on cooling/heating energy.
            </p>
            <p className="mb-8 leading-relaxed">
              Note that an air change of one per hour does not mean that 100% of
              the air is replaced in 1 h, due to mixing. After one hour, with a
              one air change per hour ventilation rate, what remains is about
              36%, 14% after two hours, and so on.
            </p>
          </div>
        </div>
      );
    } else if (id === "conditionalResults") {
      return (
        <div>
          <h1 className="title-font sm:text-4xl text-3xl text-center mb-4 capitalize font-medium">
            Conditional Results
          </h1>
          <p className="mb-8 leading-relaxed">
            Numbers reported under conditional results assume that the number of
            possibly infected persons you input are actually infected and
            spreading the disease. So, all the forecasted probabilities are
            calculated accordingly. Conditional probabilities do not take into
            consideration the severity - or lack of severity - of the outbreak
            in your region.
          </p>
          <h1 className="title-font text-2xl text-center mb-4 capitalize font-medium">
            Probability of Infection (%)
          </h1>
          <p className="mb-8 leading-relaxed">
            Assuming a given number of people in the room are infected, this is
            the probability of one of the susceptible persons, attending one of
            the repeated events, getting infected.
          </p>
          <h1 className="title-font text-2xl text-center mb-4 capitalize font-medium">
            Probability of hospitalization (%)
          </h1>
          <p className="mb-8 leading-relaxed">
            Based on the calculated probability of infection and the probability
            of hospitalization in your extant community outbreak, this estimates
            how likely one of the susceptible persons, attending one of the
            repeated events, may get hospitalized.
          </p>
          <h1 className="title-font text-2xl text-center mb-4 capitalize font-medium">
            Probability of death (%)
          </h1>
          <p className="mb-8 leading-relaxed">
            Based on the calculated probability of infection and the death rate
            in your extant community outbreak, this estimates how likely one of
            the susceptible persons, attending one of the repeated events, may
            eventually die.
          </p>
          <h1 className="title-font text-2xl text-center mb-4 capitalize font-medium">
            Ratio to risk of car travel death (times higher)
          </h1>
          <p className="mb-8 leading-relaxed">
            The ratio to risk of car travel deaths is used as a quick estimator
            of the risk level of being in such room, vis-a-vis an every day,
            minimally risky activity that everyone undertakes voluntarily, that
            is, driving a car. The numbers are based on US statistics for road
            death.
          </p>
        </div>
      );
    } else if (id === "absoluteOneEventResults") {
      return (
        <div>
          <h1 className="title-font sm:text-4xl text-3xl text-center mb-4 capitalize font-medium">
            Absolute results for a person attending one event
          </h1>
          <p className="mb-8 leading-relaxed">
            Numbers reported under absolute results use the percentage of people
            infectious in your community to estimate that a person in your room
            might be infected. So, all the forecasted probabilities are
            calculated accordingly, for one person, who is part of just one of
            the repeated events. If the outbreak is very mild in your region,
            the chance of any one individual being infected is low and thus all
            corresponding results of absolute probabilities are reduced
            accordingly.
          </p>
          <h1 className="title-font text-2xl text-center mb-4 capitalize font-medium">
            Probability of Infection (%)
          </h1>
          <p className="mb-8 leading-relaxed">
            Based on the percentage of infectious people in your community, the
            likelihood of a person within the room being infected is calculated
            which then yields the probability of one of the susceptible persons,
            attending one of the repeated events, getting infected.
          </p>
          <h1 className="title-font text-2xl text-center mb-4 capitalize font-medium">
            Probability of hospitalization (%)
          </h1>
          <p className="mb-8 leading-relaxed">
            Based on the calculated probability of infection and the probability
            of hospitalization in your extant community outbreak, this estimates
            how likely one of the susceptible persons, attending one of the
            repeated events, may get hospitalized.
          </p>
          <h1 className="title-font text-2xl text-center mb-4 capitalize font-medium">
            Probability of death (%)
          </h1>
          <p className="mb-8 leading-relaxed">
            Based on the calculated probability of infection and the death rate
            in your extant community outbreak, this estimates how likely one of
            the susceptible persons, attending one of the repeated events, may
            eventually die.
          </p>
          <h1 className="title-font text-2xl text-center mb-4 capitalize font-medium">
            Ratio to risk of car travel death (times higher)
          </h1>
          <p className="mb-8 leading-relaxed">
            The ratio to risk of car travel deaths is used as a quick estimator
            of the risk level of being in such room, vis-a-vis an every day,
            minimally risky activity that everyone undertakes voluntarily, that
            is, driving a car. The numbers are based on US statistics for road
            deaths.
          </p>
        </div>
      );
    } else if (id === "absoluteMultipleEventsResults") {
      return (
        <div>
          <h1 className="title-font sm:text-4xl text-3xl text-center mb-4 capitalize font-medium">
            Absolute results for a person attending multiple events
          </h1>
          <p className="mb-8 leading-relaxed">
            Numbers reported under absolute results use the percentage of people
            infectious in your community to estimate that a person in your room
            might be infected. So, all the forecasted probabilities are
            calculated accordingly, for one person, who will be attending all
            the repetitions of the event. Risks for multiple vents are additive,
            over each event, as compared to the risk of attending just one
            event. If the outbreak is very mild in your region, the chance of
            any one individual being infected is low and thus all corresponding
            results of absolute probabilities are reduced accordingly.
          </p>
          <h1 className="title-font text-2xl text-center mb-4 capitalize font-medium">
            Probability of Infection (%)
          </h1>
          <p className="mb-8 leading-relaxed">
            Based on the percentage of infectious people in your community, the
            likelihood of a person within the room being infected is calculated
            which then yields the probability of one of the susceptible persons,
            attending all repetitions of the event, getting infected.
          </p>
          <h1 className="title-font text-2xl text-center mb-4 capitalize font-medium">
            Probability of hospitalization (%)
          </h1>
          <p className="mb-8 leading-relaxed">
            Based on the calculated probability of infection and the probability
            of hospitalization in your extant community outbreak, this estimates
            how likely one of the susceptible persons, attending all repetitions
            of the event, may get hospitalized.
          </p>
          <h1 className="title-font text-2xl text-center mb-4 capitalize font-medium">
            Probability of death (%)
          </h1>
          <p className="mb-8 leading-relaxed">
            Based on the calculated probability of infection and the death rate
            in your extant community outbreak, this estimates how likely one of
            the susceptible persons, attending all repetitions of the event, may
            eventually die.
          </p>
          <h1 className="title-font text-2xl text-center mb-4 capitalize font-medium">
            Ratio to risk of car travel death (times higher)
          </h1>
          <p className="mb-8 leading-relaxed">
            The ratio to risk of car travel deaths is used as a quick estimator
            of the risk level of being in such room, vis-a-vis an every day,
            minimally risky activity that everyone undertakes voluntarily, that
            is, driving a car. The numbers are based on US statistics for road
            deaths.
          </p>
        </div>
      );
    } else if (id === "perRecirculatedAir") {
      return (
        <div>
          <h1 className="title-font sm:text-4xl text-3xl text-center mb-4 capitalize font-medium">
            Percentage of Recirculated Air
          </h1>
          <div className="mt-4">
            <p className="mb-8 leading-relaxed">
              This refers to the percentage of air, from the total air supplied
              to the room, that is being circulated back. So, this air is coming
              from your room itself, and not from outdoors. Most ventilation
              systems recirculate a portion of the room air to save on
              cooling/heating costs. The fraction of recirculation may typically
              vary between 70 and 90 percent. This should be provided to you by
              your building services engineer/building management office. We use
              this value, in conjunction with total air supplied to the room, to
              estimate how much outdoor air - air without virus laden particles
              - is being supplied to your room.
            </p>
          </div>
        </div>
      );
    } else if (id === "filter") {
      return (
        <div>
          <h1 className="title-font sm:text-4xl text-3xl text-center mb-4 capitalize font-medium">
            Filter type
          </h1>
          <div className="mt-4">
            <p className="mb-8 leading-relaxed">
              Ventilation systems usually have a filter through which the air
              about to be supplied to your room will be passed. Filter
              efficiency is usually reported in terms of a MERV (Minimum
              efficiency reporting value) number. Higher MERV numbered filters
              are better at filtering out small droplets and particulates from
              the air. The filter, by eliminating virus laden particles from
              recirculated air, adds to the volume of outdoor air being supplied
              to your room in terms of virus free air. We add the fraction of
              filtered outdoor air as an added measure of outdoor air
              ventilation when doing the calculations.
            </p>
            <p className="mb-8 leading-relaxed">
              We have included a list of filters with the following
              specifications of filtration efficiency for particles in the range
              of{" "}
              <a
                href={
                  "https://www.nafahq.org/understanding-merv-nafa-users-guide-to-ansi-ashrae-52-2/"
                }
              >
                one to three microns.{" "}
              </a>
              Particles in this size range are generated plentifully by
              occupants, even when just breathing, and they are also more likely
              to carry the viruses.
            </p>
            <div className="flex mx-auto justify-center py-3">
              <table className="table-auto text-center">
                <thead>
                  <tr>
                    <th className="border-t border-b px-4 py-1">Type</th>
                    <th className="border-t border-b px-4 py-1">
                      Filtration Efficiency (%)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="font-medium">
                    <td className="px-4 py-1">No filter</td>
                    <td className="px-4 py-1">0</td>
                  </tr>
                  <tr className="font-medium">
                    <td className="px-4 py-1">Unknown</td>
                    <td className="px-4 py-1">20</td>
                  </tr>
                  <tr className="font-medium">
                    <td className="px-4 py-1">MERV8</td>
                    <td className="px-4 py-1">20</td>
                  </tr>
                  <tr className="font-medium">
                    {" "}
                    <td className="px-4 py-1">MERV9</td>
                    <td className="px-4 py-1">35</td>
                  </tr>
                  <tr className="font-medium">
                    <td className="px-4 py-1">MERV10</td>
                    <td className="px-4 py-1">50</td>
                  </tr>
                  <tr className="font-medium">
                    <td className="px-4 py-1">MERV11</td>
                    <td className="px-4 py-1">65</td>
                  </tr>
                  <tr className="font-medium">
                    <td className="px-4 py-1">MERV12</td>
                    <td className="px-4 py-1">80</td>
                  </tr>
                  <tr className="font-medium">
                    <td className="px-4 py-1">MERV13</td>
                    <td className="px-4 py-1">85</td>
                  </tr>
                  <tr className="font-medium">
                    <td className="px-4 py-1">MERV14</td>
                    <td className="px-4 py-1">90</td>
                  </tr>
                  <tr className="font-medium">
                    <td className="px-4 py-1">MERV15</td>
                    <td className="px-4 py-1">90</td>
                  </tr>
                  <tr className="border-b font-medium">
                    <td className="px-4 py-1">MERV16</td>
                    <td className="px-4 py-1">95</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    } else if (id === "mask") {
      return (
        <div>
          <h1 className="title-font sm:text-4xl text-3xl text-center mb-4 capitalize font-medium">
            Mask type
          </h1>
          <div className="mt-4">
            <p className="mb-8 leading-relaxed">
              We have included a list of masks under this list. They approximate
              some commonly available mask types. Based on your selection of
              mask type, mask exhalation and inhalation efficiency are chosen.
              Note that inhalation and exhalation efficiencies are typically
              different for different masks. Also, actual efficiency in the
              field may differ from lab tested values so you will note that we
              have made some conservative approximations regarding the mask’s
              filtration efficiencies. Mask type, along with what fraction of
              people are wearing the masks, is used to determine how much of
              infectious quanta released by a patient reaches the air in the
              room and how much of that may be inhaled by an occupant. If unsure
              of what specific mask type select, select Mixed.
            </p>
            <div className="flex mx-auto justify-center py-3">
              <table className="table-auto text-center">
                <thead>
                  <tr>
                    <th className="px-4 border-t py-1" />
                    <th className="px-4 border-b border-t py-1" colSpan="2">
                      Mask Efficiency (%)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b px-4 py-1">Masktype</td>
                    <td className="border-b px-4 py-1">
                      Exhalation Filtration
                    </td>
                    <td className="border-b px-4 py-1">
                      Inhalation Filtration
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-1">
                      Mixed (if you are unsure of specifics)
                    </td>
                    <td className="px-4 py-1">50</td>
                    <td className="px-4 py-1">30</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-1">Surgical masks</td>
                    <td className="px-4 py-1">65</td>
                    <td className="px-4 py-1">50</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-1">Cloth masks</td>
                    <td className="px-4 py-1">50</td>
                    <td className="px-4 py-1">30</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-1">N95</td>
                    <td className="px-4 py-1">85</td>
                    <td className="px-4 py-1">85</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-1">N95, valved</td>
                    <td className="px-4 py-1">0</td>
                    <td className="px-4 py-1">85</td>
                  </tr>
                  <tr>
                    <td className="border-b px-4 py-1">Face shields</td>
                    <td className="border-b px-4 py-1">23</td>
                    <td className="border-b px-4 py-1">23</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <p className="mb-8 leading-relaxed">
          <h1 className="title-font sm:text-4xl text-3xl text-center mb-4 capitalize font-medium">
            {id}
          </h1>
          <p className="mb-8 leading-relaxed">
            No help text is available for this variable.
          </p>
          <Link
            to={{
              pathname:
                "https://github.com/FedericoTartarini/covid-aerosol-transmission-estimator/issues/new/choose",
            }}
            target="_blank"
          >
            <button className="inline-flex border-0 py-2 px-6 focus:outline-none rounded text-lg">
              Open issue on GitHub
              <FontAwesomeIcon icon={faGithub} size={"2x"} className="ml-4" />
            </button>
          </Link>
        </p>
      );
    }
  }

  return (
    <section className="body-font">
      <Helmet>
        <title>Help Page</title>
        <meta name="description" content="This is the help page" />
      </Helmet>
      <div className="container mx-auto flex flex-col py-8 text-justify justify-center items-center">
        <div className="max-w-md">
          <HelpText id={match.params.id} />
        </div>
      </div>
    </section>
  );
}

export default HelpPage;
