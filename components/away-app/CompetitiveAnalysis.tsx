import Image from "next/image";
import React from "react";

function CompetitiveAnalysis() {
  return (
    <>
      <h2 className="text-4xl text-center font-bold text-neutral-content mb-5">
        Competitive Analysis
      </h2>
      <div className="overflow-scroll max-h-[600px] max-w-full bg-neutral rounded-lg ">
        <table className="table table-pin-rows table-pin-cols ">
          {/* head */}
          <thead>
            <tr>
              <th className="w-1/12"> </th>
              <th className=" w-2/12 text-neutral-content">Wanderlog</th>
              <th className="w-2/12 text-neutral-content">TripAdvisor</th>
              <th className="w-2/12 text-neutral-content">Culture Trip</th>
              <th className="w-2/12 text-neutral-content">Lambus</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>Link</th>
              <td>
                <a
                  href="https://wanderlog.com/"
                  title="wanderlog"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Image
                    src="/assets/away-app/wanderlog.png"
                    width={800}
                    height={100}
                    alt="wanderlog"
                    className="rounded-lg"
                  />
                </a>
              </td>
              <td>
                <a
                  href="https://www.tripadvisor.ie/"
                  title="tripAdvisor"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Image
                    src="/assets/away-app/tripAdvisor.png"
                    width={800}
                    height={100}
                    alt="tripAdvisor"
                    className="rounded-lg"
                  />
                </a>
              </td>
              <td>
                <a
                  href="https://theculturetrip.com/"
                  title="CultureTrip"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Image
                    src="/assets/away-app/CultureTrip.png"
                    width={800}
                    height={100}
                    alt="CultureTrip"
                    className="rounded-lg"
                  />
                </a>
              </td>
              <td>
                <a
                  href="https://www.lambus.com/"
                  title="lambus"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Image
                    src="/assets/away-app/lambus.png"
                    width={800}
                    height={100}
                    alt="lambus"
                    className="rounded-lg"
                  />
                </a>
              </td>
            </tr>

            <tr>
              <th>General Info</th>

              {/* Wanderlog */}
              <td>
                <ul>
                  <li>
                    Competitor with group planning and travel content features,
                  </li>
                  <li>
                    Goal: Facilitate detailed trip planning and content sharing,
                  </li>

                  <li>Complex, requiring time to understand,</li>
                  <li>
                    Mixed Play Store reviews, complaints about flexibility and
                    feature overload.
                  </li>
                </ul>
              </td>

              {/* TripAdvisor */}
              <td>
                <ul>
                  <li>
                    World's largest travel platform for comparing destinations
                    with user reviews,
                  </li>
                  <li>
                    most trusted travel companion because of the social profile
                    it provides to users,
                  </li>
                  <li>
                    Recently added feature to create travel plans where users
                    can invite users and add the content from tripadvisor's
                    explore section to their plan.
                  </li>
                </ul>
              </td>

              {/* Culture Trip */}
              <td>
                <ul>
                  <li>
                    Travel guide plus trip planning agency that provides users
                    with articles
                  </li>
                  <li>
                    Help them understand the travel destinations and allows them
                    to make trip bookings
                  </li>
                  <li>
                    More focused on selling their own commercial trip packages
                  </li>
                  <li>
                    Quality and variety of travel content it provides to the
                    users is competition
                  </li>
                </ul>
              </td>

              {/* Lambus */}
              <td>
                <ul>
                  <li>
                    {" "}
                    Discover travel destinations, import their external routes,
                    create trip itineraries, store travel documents, make
                    bookings, and track expenses.
                  </li>
                  <li>
                    Primary focus is on the planning features more than the
                    travel content
                  </li>
                  <li>
                    Only provides travel destinations as standalone places
                    without context to help users make decisions
                  </li>
                  <li>
                    Allows the user to share the trip with multiple people using
                    a QR code and PIN number
                  </li>
                  <li>
                    Valuable competitor because of the simplicity within the
                    planning features
                  </li>
                </ul>
              </td>
            </tr>

            {/* row 2 */}
            <tr>
              <th>First Impressions</th>

              {/* Wanderlog */}
              <td>
                <ul>
                  <li>Initial experience with Wanderlog was chaotic,</li>
                  <li>
                    Popover labels and a sample trip were provided for
                    onboarding, but it still felt non-intuitive,
                  </li>
                  <li>
                    Liked the feature allowing multiple people to plan a trip
                    together via links.
                  </li>
                </ul>
              </td>

              {/* TripAdvisor */}
              <td>
                <ul>
                  <li>
                    Good quality of travel content & right amount of information
                    relevant to the traveler,
                  </li>
                  <li>
                    Perfect balance between the travel content, user reviews and
                    the planning feature,
                  </li>
                  <li>
                    Reviews on Playstore mention that planning is
                    oversimplified,{" "}
                  </li>
                  <li>
                    and people had to go back to an excel sheet to add
                    supplementary information.
                  </li>
                </ul>
              </td>

              {/* Culture Trip */}
              <td>
                <ul>
                  <li>
                    At first, the app doesn't make it clear that it is not a
                    freemium travel guide or planner
                  </li>
                  <li>
                    But actually a travel agency selling trip plans and
                    packages,
                  </li>
                  <li>
                    Landing pages and the explore sections provide an impressive
                    quality of travel guides
                  </li>
                </ul>
              </td>

              {/* Lambus */}
              <td>
                <ul>
                  <li>
                    For the first time, it is easy to discover all the features
                    since they are all presented as empty states on the same
                    screens,
                  </li>
                  <li>
                    {" "}
                    Helpful to have a better onboarding and instructions design
                    to understand the app's capabilities,
                  </li>
                  <li>
                    Only app that has a chat feature but difficult to discover
                    it.
                  </li>
                </ul>
              </td>
            </tr>

            {/* row 3 */}
            <tr>
              <th>Interaction</th>

              {/* Wanderlog */}
              <td>
                <ul>
                  <li>
                    Presents travel content in two ways:
                    <ul>
                      <li>Extracts destinations from various travel blogs;</li>
                      <li>and the trip guides created by users,</li>
                    </ul>
                  </li>
                  <li>
                    Allows multiple users to collaborate on trip planning is
                    confusing,
                  </li>
                  <li>
                    Navigation is straightforward although most of it is linear,
                  </li>
                  <li>
                    Plan doesn't offer categorization once the list gets huge.
                  </li>
                  <li>
                    Allows too many categories in one page increasing the
                    cognitive load.
                  </li>
                </ul>
              </td>

              {/* TripAdvisor */}
              <td>
                <ul>
                  <li>
                    Can explore a plethora of destinations, read honest reviews,
                    compare prices, make site bookings, and even create their
                    own travel plans,
                  </li>
                  <li>
                    Fairly easy to navigate but we can only save destinations to
                    our trip plans and there is no wish list,
                  </li>
                  <li>
                    Once a place is liked, it goes straight into the 'Not yet
                    planned' section at the bottom, hidden for the user,
                  </li>
                  <li>
                    Can only add places from their 'Not yet planned' section to
                    their itinerary,
                  </li>
                  <li>
                    linear process is too difficult to remember every time.
                  </li>
                </ul>
              </td>

              {/* Culture Trip */}
              <td>
                <ul>
                  <li>
                    Allows users to switch between exploring the commercial
                    trips and exploring travel guides as articles.
                  </li>
                  <li>
                    Although the navigation is quite straight-forward for the
                    guides,
                  </li>
                  <li>
                    The article seems to be a static page where the user has to
                    spend a lot of time reading through it.
                  </li>
                  <li>
                    Categorization of the guide articles into user-friendly
                    labels helps users to make quick decisions based on their
                    preferences
                  </li>
                </ul>
              </td>

              {/* Lambus */}
              <td>
                <ul>
                  <li>
                    Five links in the bottom navigation, which is too much
                    considering 3 of them don't serve the primary function of
                    trip planning.
                  </li>
                  <li>
                    Setting up a new trip is fairly simple with a short form
                  </li>
                  <li>
                    Adding a new place is a pain point where users have to
                    search for a specific location
                  </li>
                  <li>
                    Once selected the place automatically gets added to the
                    itinerary without showing any preview.
                  </li>
                  <li>
                    Have to constantly switch between the trips and discover new
                    places which is hectic
                  </li>
                  <li>
                    When exploring a particular city, the information is laid
                    out in a disconnected way
                  </li>
                </ul>
              </td>
            </tr>
            {/* row 4 */}
            <tr>
              <th>Visual Design</th>

              {/* Wanderlog */}
              <td>
                <ul>
                  <li>
                    Clear brand identity with orange as the brand colour that
                    signifies energy & passion,
                  </li>
                  <li>
                    Layout is clean and minimalist although the focus is too
                    much on the text than images,
                  </li>
                  <li>
                    Pastel color backgrounds and primary colour CTAs on top and
                    similar coloured illustrations,
                  </li>
                  <li>
                    Icons out of place with realistic icons and flat icons with
                    multiple colors & no descriptive labels,
                  </li>
                  <li>
                    Uses Google Maps for images uploaded by people there, which
                    are too many and mostly not the right ones.
                  </li>
                </ul>
              </td>

              {/* TripAdvisor */}
              <td>
                <ul>
                  <li>
                    Bold and adventurous brand identity with its use of green
                    colour palette and bold modern typeface,
                  </li>
                  <li>Touch targets are huge and clearly marked,</li>
                  <li>
                    {" "}
                    Layout is minimalistic and bold with a primary focus on
                    attractive imagery,{" "}
                  </li>
                  <li>
                    White space is sufficient to rest the eyes and focus on
                    content,
                  </li>
                  <li>
                    Adapts to the smartphone's native color theme but the dark
                    theme has some accessibility issues with contrast
                  </li>
                </ul>
              </td>

              {/* Culture Trip */}
              <td>
                <ul>
                  <li>
                    The bright greens, trendy flat illustrations, casual tone of
                    voice, and magnificent imagery indicates that the product
                    targets younger generations,
                  </li>
                  <li>
                    Minimal layout and visual distinction between the various UI
                    elements for better contrast and accessibility,
                  </li>
                  <li>
                    The elements are huge & easily clickable, we feel that some
                    of them are unnecessarily oversized,
                  </li>
                  <li>
                    White text overlaid on images causes legibility issues
                  </li>
                </ul>
              </td>

              {/* Lambus */}
              <td>
                <ul>
                  <li>
                    Hasn't got a strong brand identity even when it employs a
                    single brand color,
                  </li>
                  <li>
                    There are inconsistencies in layout (portrait and landscape
                    images),
                  </li>
                  <li>
                    Use of high quality travel images and very high proportion
                    of layout given to images,
                  </li>
                  <li>
                    Clear hierarchy in typography but the small label text has
                    accessibility issues,
                  </li>
                  <li>
                    Iconography is a bit inconsistent with multiple styles.
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>Inference</th>

              {/* Wanderlog */}
              <td>
                <ul>
                  <li>
                    Closest to our proposed product and has several good
                    reviews,
                  </li>
                  <li>
                    Experience of exploring the travel content and creating a
                    group trip plan to be both helpful but overwhelming,
                  </li>
                  <li>
                    Intend to adopt the concepts of travel content and trip
                    planning,
                  </li>
                  <li>
                    Will try to make it more simpler to use and reduce the
                    information overload.
                  </li>
                </ul>
              </td>

              {/* TripAdvisor */}
              <td>
                <ul>
                  <li>Inspired by its minimalist design and branding,</li>
                  <li>Will use the high quality content as inspiration,</li>
                  <li>
                    Instead of a linear way, our app will offer multiple paths
                    to add a places,
                  </li>
                  <li>Will avoid oversimplification,</li>
                  <li>
                    Allow users to have a flexible experience when creating the
                    trip plan.
                  </li>
                </ul>
              </td>

              {/* Culture Trip */}
              <td>
                <ul>
                  <li>
                    Culture Trip focuses a lot on selling their trip packages
                    but tries to provide travel guide content.
                  </li>
                  <li>
                    Only allows users to save the guide articles and do nothing
                    beyond that,
                  </li>
                  <li>
                    We will have features for the complete cycle of group trip
                    planning instead of simply providing information as
                    articles,
                  </li>
                  <li>
                    We will take extra care of accessibility wherever two or
                    more media elements overlap,
                  </li>
                  <li>
                    We will have a clear hierarchy and use the right sizes of UI
                    elements from material design guidelines,
                  </li>
                  <li>Inspired by the categorization of the guide articles </li>
                </ul>
              </td>

              {/* Lambus */}
              <td>
                <ul>
                  <li>
                    Planning is stressful because of lack of user friendliness
                    when adding a place to the trip plan,{" "}
                  </li>
                  <li>
                    and deciding where to go simply from a large list of
                    locations,
                  </li>
                  <li>
                    Useful to store the documents, photos, bookings, notes,
                    lists, and expenses but fails at providing the primary
                    functions,
                  </li>
                  <li>
                    Prioritize on creating a seamless experience with providing
                    quality travel content
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CompetitiveAnalysis;
