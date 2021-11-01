import React from 'react';
//styles
import './terms.css';
import { Link } from 'react-router-dom';
//import icons
import { CgMenuRight, CgMenu } from 'react-icons/cg';
import { GrFormClose } from 'react-icons/gr';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { GrLinkedinOption } from 'react-icons/gr';
import { AiOutlineInstagram } from 'react-icons/ai';

function terms(props) {
  return (
    <div className='termContainer'>
      <div className='menuTerms'>
        <button
          className='sideBtnTerms'
          // onClick={this.ServiceClickHandler}
        >
          <span>
            <CgMenuRight className='menuHoverTerms'></CgMenuRight>
            {/* <CgMenu className='menuRealTerms'></CgMenu> */}
          </span>
          <span className='ServiceText'>SERVICES</span>
          {/* <GrFormClose
          // className={this.state.showService ? 'hideCloseBtn' : 'closeBtn'}
          ></GrFormClose> */}
        </button>
        <div className='menuItemsWrapperTerms'>
          <Link to='/automobile'>
            <h1>NATURE CORP</h1>
          </Link>

          <Link to='/'>
            <a href=''>
              <p>HOME</p>
            </a>
          </Link>
          <Link to='/' onClick={() => this.bringAboutToViewHandler(true)}>
            <p>ABOUT</p>
          </Link>

          {props.showTermsDetail ? (
            <button
              className='termCloseBtn'
              onClick={props.showTermsDetailsHandler}
            >
              <GrFormClose className='btnTermClose'></GrFormClose>
            </button>
          ) : (
            <a href=''>
              <p>TERMS</p>
            </a>
          )}
        </div>
        <div className='companyName'>NATURE CORP</div>
      </div>

      <main className='termsContentContainer'>
        <section className='bar'>
          <div className='termsWhiteBar'></div>
          <div className='termsGreenBar'></div>
          <div className='termsWhiteBar'></div>
        </section>
        <section className='content'>
          <article>
            <h1 className='termsHeading'>TERMS AND CONDITIONS</h1>
            <p>
              READ THESE TERMS AND CONDITIONS ("TERMS") CAREFULLY BEFORE USING
              THE SERVICES DESCRIBED HEREIN. BY UTILIZING THE WEBSITE LOCATED AT
              naturecorp.net ("WEBSITE"), YOU ACKNOWLEDGE THAT YOU HAVE READ
              THESE TERMS AND CONDITIONS AND THAT YOU AGREE TO BE BOUND BY THEM.
              IF YOU DO NOT AGREE TO ALL OF THE TERMS AND CONDITIONS OF THIS
              AGREEMENT, YOU ARE NOT AN AUTHORIZED USER OF THESE SERVICES AND
              YOU SHOULD NOT USE THIS WEBSITE. NATURE CORP RESERVES THE RIGHT TO
              CHANGE, MODIFY, ADD OR REMOVE PORTIONS OF THESE TERMS AT ANY TIME
              FOR ANY REASON. WE SUGGEST THAT YOU REVIEW THESE TERMS
              PERIODICALLY FOR CHANGES. SUCH CHANGES SHALL BE EFFECTIVE
              IMMEDIATELY UPON POSTING. YOU ACKNOWLEDGE THAT BY ACCESSING OUR
              WEBSITE AFTER WE HAVE POSTED CHANGES TO THESE TERMS, YOU ARE
              AGREEING TO THESE TERMS AS MODIFIED.
            </p>
            <ul className='termsListedSection'>
              <li>
                <article>
                  <h2>DISCLAIMER</h2>
                  <p>
                    Nothing contained on this Website constitutes tax,
                    accounting, regulatory, legal, insurance or investment
                    advice. Neither the information, nor any opinion, contained
                    on this Website constitutes a solicitation or offer by
                    Nature Corp, Inc. ("Nature Corp") or its affiliates to buy
                    or sell any securities, futures, options or other financial
                    instruments, nor shall any such security be offered or sold
                    to any person in any jurisdiction in which such offer,
                    solicitation, purchase, or sale would be unlawful under the
                    securities laws of such jurisdiction. Decisions based on
                    information contained on this Website are the sole
                    responsibility of the visitor. In exchange for using this
                    Website, the visitor agrees to indemnify and hold Nature
                    Corp, its officers, directors, employees, affiliates,
                    agents, licensors and suppliers harmless against any and all
                    claims, losses, liability, costs and expenses (including but
                    not limited to attorneys' fees) arising from your use of
                    this Website, from your violation of these Terms or from any
                    decisions that the visitor makes based on such information.
                  </p>
                  <p>
                    Nothing contained on this Website constitutes tax,
                    accounting, regulatory, legal, insurance or investment
                    advice. Neither the information, nor any opinion, contained
                    on this Website constitutes a solicitation or offer by
                    Nature Corp, Inc. ("Nature Corp") or its affiliates to buy
                    or sell any securities, futures, options or other financial
                    instruments, nor shall any such security be offered or sold
                    to any person in any jurisdiction in which such offer,
                    solicitation, purchase, or sale would be unlawful under the
                    securities laws of such jurisdiction. Decisions based on
                    information contained on this Website are the sole
                    responsibility of the visitor. In exchange for using this
                    Website, the visitor agrees to indemnify and hold Nature
                    Corp, its officers, directors, employees, affiliates,
                    agents, licensors and suppliers harmless against any and all
                    claims, losses, liability, costs and expenses (including but
                    not limited to attorneys' fees) arising from your use of
                    this Website, from your violation of these Terms or from any
                    decisions that the visitor makes based on such information.
                  </p>
                  <p>
                    Nothing contained on this Website constitutes tax,
                    accounting, regulatory, legal, insurance or investment
                    advice. Neither the information, nor any opinion, contained
                    on this Website constitutes a solicitation or offer by
                    Nature Corp, Inc. ("Nature Corp") or its affiliates to buy
                    or sell any securities, futures, options or other financial
                    instruments, nor shall any such security be offered or sold
                    to any person in any jurisdiction in which such offer,
                    solicitation, purchase, or sale would be unlawful under the
                    securities laws of such jurisdiction. Decisions based on
                    information contained on this Website are the sole
                    responsibility of the visitor. In exchange for using this
                    Website, the visitor agrees to indemnify and hold Nature
                    Corp, its officers, directors, employees, affiliates,
                    agents, licensors and suppliers harmless against any and all
                    claims, losses, liability, costs and expenses (including but
                    not limited to attorneys' fees) arising from your use of
                    this Website, from your violation of these Terms or from any
                    decisions that the visitor makes based on such information.
                  </p>

                  <p>
                    This Website is for information purposes only and is not
                    intended to be relied upon as a forecast, research or
                    investment advice. The information on this Website does not
                    constitute a recommendation, offer or solicitation to buy or
                    sell any securities or to adopt any investment strategy.
                    Although this material is based upon information that Nature
                    Corp considers reliable and endeavors to keep current,
                    Nature Corp does not assure that this material is accurate,
                    current or complete, and it should not be relied upon as
                    such. Any opinions expressed on this Website may change as
                    subsequent conditions vary. Past performance is no guarantee
                    of future results.
                  </p>
                  <p>
                    The information and services provided on this Website are
                    provided "AS IS" and without warranties of any kind, either
                    expressed or implied. To the fullest extent permissible
                    pursuant to applicable law, Nature Corp disclaims all
                    warranties, including, but not limited to, any warranty of
                    non-infringement of third-party rights and any implied
                    warranties of merchantability and fitness for a particular
                    purpose. Nature Corp does not warrant, either expressly or
                    impliedly, the accuracy or completeness of the information,
                    text, graphics, links or other items contained on this
                    Website and does not warrant that the functions contained in
                    this Website will be uninterrupted or error-free, that
                    defects will be corrected, or that the Website will be free
                    of viruses or other harmful components. Nature Corp
                    expressly disclaims all liability for errors and omissions
                    in the materials on this Website and for the use or
                    interpretation by others of information contained on the
                    Website.
                  </p>
                </article>
              </li>
              <br></br>
              <li>
                <article>
                  <h2>Fund and Advisor Disclosures</h2>
                  <p>
                    Investments in a Nature Corp product or client account are
                    not bank deposits and are not insured or guaranteed by
                    Nature Corp or the Federal Deposit Insurance Corporation,
                    any other government agency or any bank. Although a money
                    market fund seeks to preserve the value of your investment
                    at $1.00 per share, it is possible to lose money by
                    investing in the fund. Please carefully consider a fund's
                    investment objective, risks, charges and expenses before
                    investing. For this and other information, call or write to
                    Nature Corp for a free prospectus or view one online. Read
                    it carefully before you invest or send money.
                  </p>
                </article>
              </li>
              <li>
                <article>
                  <h2>Nature Corp Institutional Trust Company, N.A. (“BTC”)</h2>
                  <p>
                    BTC, a national banking association operating as a limited
                    purpose trust company, provides fiduciary and trust
                    services, including certain commingled investment options
                    designed to help certain types of qualified institutional
                    investors. BTC is a wholly-owned subsidiary of Nature Corp
                    Inc. BTC’s primary regulator is the Office of the
                    Comptroller of the Currency, the agency of the US Treasury
                    Department that regulates US national banks. Investments in
                    a BTC-managed commingled vehicle or client account are not
                    bank deposits, are not insured or guaranteed by the Federal
                    Deposit Insurance Corporation, any other government agency
                    or any bank, and are not guaranteed by BTC, Nature Corp or
                    any of their affiliates. Please carefully consider a
                    commingled vehicle’s investment objective, risks, charges
                    and expenses before investing. Although a short-term
                    investment fund seeks to maintain a $1.00 unit value, it is
                    possible to lose money by investing in such a fund.
                    Commingled investment vehicles maintained by BTC are
                    available only to certain qualified institutional investors
                    and are not offered to the general public; prospectuses are
                    not required and prices are not available in local
                    publications. To obtain more information, please contact
                    your BTC account manager.
                  </p>
                </article>
              </li>

              <li>
                <article>
                  <h2>SEC Materials</h2>
                  <p>
                    Certain information provided through this Website has been
                    filed with the Securities and Exchange Commission ("SEC")
                    (such materials being referred to as "SEC Materials"). The
                    SEC Materials and other public disclosures contained on this
                    Website contain forward-looking statements within the
                    meaning of the Private Securities Litigation Reform Act,
                    with respect to Nature Corp’s future financial or business
                    performance, strategies or expectations. Forward-looking
                    statements are typically identified by words or phrases such
                    as "trend," "potential," "opportunity," "pipeline,"
                    "believe," "comfortable," "expect," "anticipate," "current,"
                    "intention," "estimate," "position," "assume," "outlook,"
                    "continue," "remain," "maintain," "sustain," "seek,"
                    "achieve," and similar expressions, or future or conditional
                    verbs such as "will," "would," "should," "could," "may" or
                    similar expressions.
                  </p>
                  <p>
                    In addition to risk factors previously disclosed in SEC
                    Materials and those identified elsewhere in this Website,
                    the following factors, among others, could cause actual
                    results to differ materially from forward-looking statements
                    or historical performance:
                    <p>
                      (1) the introduction, withdrawal, success and timing of
                      business initiatives and strategies;
                    </p>
                    <p>
                      (2) changes and volatility in political, economic or
                      industry conditions, the interest rate environment,
                      foreign exchange rates or financial and capital markets,
                      which could result in changes in demand for products or
                      services or in the value of assets under management
                    </p>
                    <p>
                      (3) the relative and absolute investment performance of
                      Nature Corp’s investment products;
                    </p>
                    <p>(4) the impact of increased competition;</p>
                    <p>
                      (5) the impact of future acquisitions or divestitures;
                    </p>
                    <p>(6) the unfavorable resolution of legal proceedings;</p>
                    <p>(7) the extent and timing of any share repurchases;</p>
                    <p>
                      (8) the impact, extent and timing of technological changes
                      and the adequacy of intellectual property and information
                      security protection;
                    </p>
                    <p>
                      (9) the impact of legislative and regulatory actions and
                      reforms, including the Dodd-Frank Wall Street Reform and
                      Consumer Protection Act, and regulatory, supervisory or
                      enforcement actions of government agencies relating to
                      Nature Corp or The PNC Financial Services Group, Inc.
                    </p>
                    <p>
                      (10) terrorist activities, international hostilities and
                      natural disasters, which may adversely affect the general
                      economy, domestic and local financial and capital markets,
                      specific industries or Nature Corp ;
                    </p>
                    <p>
                      (11) the ability to attract and retain highly talented
                      professionals;
                    </p>
                    <p>
                      (12) fluctuations in the carrying value of economic
                      investments;
                    </p>
                    <p>
                      (13) the impact of changes to tax legislation, including
                      income, payroll and transaction taxes, and taxation on
                      products or transactions, which could affect the value
                      proposition to clients and, generally, the tax position of
                      the Company;
                    </p>
                    <p>
                      (14) Nature Corp’s success in maintaining the distribution
                      of its products;
                    </p>
                    <p>
                      (15) the impact of Nature Corp’s electing to provide
                      support to its products from time to time and any
                      potential liabilities related to securities lending or
                      other indemnification obligations; and
                    </p>
                    <p>
                      (16) the impact of problems at other financial
                      institutions or the failure or negative performance of
                      products at other financial institutions. Nature Corp’s
                      latest Annual Report on Form 10-K and Nature Corp’s
                      subsequent reports filed with the SEC, accessible on the
                      SEC's website at www.sec.gov and on this Website, discuss
                      these factors in more detail and identify additional
                      factors that can affect forward-looking statements
                    </p>
                    .
                  </p>
                </article>
              </li>
              <li>
                <article>
                  <h2>
                    Trademarks, Copyrights and other Intellectual Property
                  </h2>
                  <p>
                    The content contained on this Website is owned or licensed
                    by Nature Corp’s and its third-party information providers
                    and is protected by applicable copyrights, trademarks,
                    service marks, and/or other intellectual property rights.
                    Such content is solely for your personal, non-commercial
                    use. Accordingly, you may not copy, distribute, modify,
                    post, frame or deep link this Website, including any text,
                    graphics, video, audio, software code, user interface design
                    or logos. You may download material displayed on this
                    Website for your personal use provided you also retain all
                    copyright and other proprietary notices contained on the
                    materials. You may not distribute, modify, transmit, reuse,
                    repost, or use the content of this Website for public or
                    commercial purposes, including all text, images, audio, and
                    video, without Nature Corp’s written permission.
                    Modification or use of the materials for any other purpose
                    violates Nature Corp’s intellectual property rights.
                  </p>
                  <p>
                    All trademarks, service marks, trade names, and logos
                    displayed on this Website are proprietary to Nature Corp
                    and/or their respective owners. Nothing contained on this
                    Website should be construed as granting, by implication,
                    estoppel, or otherwise, any license or right to use any
                    trademark displayed on this Website without the written
                    permission of Nature Corp or such other third party that may
                    own the trademark displayed on this Website. Your use of the
                    trademarks displayed on this Website, except as provided
                    herein, is strictly prohibited.
                  </p>
                  <p>
                    The use of the images displayed on this Website by you, or
                    anyone else authorized by you, is prohibited. Any
                    unauthorized use of the images may violate copyright laws,
                    trademark laws, and the laws of privacy and publicity, and
                    communications, as well as other regulations and statutes.
                    If you download any information from this Website, you agree
                    that you will not copy it or remove or obscure any copyright
                    or other notices or legends contained in any such
                    information.
                  </p>
                </article>
              </li>
              <li>
                <article>
                  <h2>Links to Other Websites</h2>
                  <p>
                    Nature Corp’s may establish links between this Website and
                    one or more websites operated by third parties. Nature
                    Corp’s has no control over any such other websites, the
                    contents therein or the products/services offered. The
                    existence of any such links shall not constitute an
                    endorsement of, or representation or warranty by Nature
                    Corp’s regarding such websites, the contents of the
                    websites, the products or services of the websites or the
                    operators of the websites. Your access to and use of such
                    linked websites is governed by the terms of use and privacy
                    policies of those sites, and shall be at your own risk.
                    disclaims responsibility for the privacy policies and
                    customer information practices of third-party internet
                    websites hyperlinked from our Website.
                  </p>
                </article>
              </li>
              <li>
                <article>
                  <h2>Links to Nature Corp from Other Websites</h2>
                  <p>
                    You shall not display hyperlinks on your websites to any
                    website owned or operated by Nature Corp’s. If you desire to
                    display on your website a hyperlink to a Nature Corp
                    website, you must enter into a written agreement with Nature
                    Corp’s governing such display. Access to any Nature Corp’s
                    website does not authorize you to use any of Nature Corp’s
                    names, logos, trademarks or copyrighted material, and you
                    agree not to do so without Nature Corp’s express written
                    consent. Requests to display hyperlinks on your websites to
                    Nature Corp’s websites should be e-mailed to
                    naturecorporations@gmail.com
                  </p>
                </article>
              </li>
              <li>
                <article>
                  <h2>Transmissions to and From this Website</h2>
                  <p>
                    Electronic communications can be intercepted by third
                    parties and, accordingly, transmissions to and from this
                    Website may not be secure. Communications to Nature Corp’s,
                    particularly those containing confidential information, may
                    be sent by mail to: Nature Corp’s Inc., East 52nd Street,
                    New York, NY 10022, Attn: Webmaster. Nature Corp’s shall be
                    free to use, for any purpose, any ideas, concepts, know-how,
                    or techniques provided by a website user to Nature Corp’s
                    through this Website. You acknowledge and agree that Nature
                    Corp’s has granted you limited access to the specific files
                    pertaining to the Nature Corp’s funds("Approved Files"), and
                    you agree not to attempt to access computer files other than
                    the Approved Files. Nature Corp’s makes no warranty to you
                    regarding the security of the Website, including with regard
                    to the ability of any unauthorized persons to access
                    information received or transmitted by you through or from
                    the Website. Nature Corp’s reserves the right to cease
                    providing, or to change, this Website and content of such
                    information (or any portion or feature thereof) at any time
                    or frequency and without notice.
                  </p>
                </article>
              </li>
              <li>
                <article>
                  <h2>Account and Transaction Information on this Website</h2>
                  <p>
                    Certain Nature Corp’s clients may access account
                    information, including transactions, through this Website.
                    Account information is unaudited unless noted otherwise, may
                    be based on estimates. Do not make any investment decisions
                    based on such information as it is subject to change.
                  </p>
                </article>
              </li>
              <li>
                <article>
                  <h2>Privacy Policy</h2>
                  <p>
                    Please review our privacy policy, which is a part of this
                    Agreement and hereby incorporated by reference, to learn
                    about our information collection practices and the measures
                    we take to preserve the privacy and security of your
                    information.
                  </p>
                </article>
              </li>
              <li>
                <article>
                  <h2>E-mail and Marketing</h2>
                  <p>
                    Financial professionals who complete the registration
                    process to access the Nature Corp’s web site are at the same
                    time granting Nature Corp’s permission to send them e-mail
                    messages for marketing and general communication purposes at
                    the e-mail address they have provided. This service may be
                    discontinued at any time by responding to the email with
                    "Unsubscribe" in the subject line.
                  </p>
                </article>
              </li>
              <li>
                <article>
                  <h2>Jurisdiction and Governing Law</h2>
                  <p>
                    The information provided on this Website is not intended for
                    distribution to, or use by, any person or entity in any
                    jurisdiction or country where such distribution or use would
                    be contrary to law or regulation or which would subject
                    Nature Corp’s or its affiliates to any registration
                    requirement within such jurisdiction or country. Each
                    investment product and service referred to on this Website
                    is intended to be made available to only U.S. residents.
                    This Website will not be considered a solicitation for or
                    offering of any investment product or service to any person
                    in any jurisdiction where such solicitation or offering
                    would be illegal.
                  </p>
                  <p>
                    The laws of the State of New York govern these Terms without
                    regard to conflict of law provisions. If you take legal
                    action relating to these Terms, you agree to file such
                    action only in the New York State Supreme Court located in
                    New York, NY, or the United States District Court for the
                    Southern District of New York, and you consent and submit to
                    the personal jurisdiction of those courts for the purpose of
                    litigating any action with Nature Corp, its affiliates or
                    with any funds referenced in this site.
                  </p>
                </article>
              </li>
              <li>
                <article>
                  <h2>Limitation of Liability</h2>
                  <p>
                    NATURE CORP AND ITS AFFILIATES AND THEIR RESPECTIVE
                    OFFICERS, DIRECTORS, EMPLOYEES OR AGENTS WILL NOT BE LIABLE
                    TO YOU OR ANYONE ELSE FOR ANY DAMAGES OF ANY KIND,
                    INCLUDING, BUT NOT LIMITED TO, DIRECT, CONSEQUENTIAL,
                    INCIDENTAL, SPECIAL OR INDIRECT DAMAGES (INCLUDING BUT NOT
                    LIMITED TO LOST PROFITS, TRADING LOSSES OR DAMAGES THAT
                    RESULT FROM USE OR LOSS OF USE OF THIS WEBSITE), EVEN IF
                    NATURE CORP HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH
                    DAMAGES OR LOSSES, INCLUDING, WITHOUT LIMITATION, FROM THE
                    USE OR ATTEMPTED USE OF THIS WEBSITE OR ANOTHER LINKED
                    WEBSITE.
                  </p>
                  <p>
                    IF YOU LIVE IN A STATE THAT DOES NOT ALLOW THE LIMITATION OR
                    EXCLUSION OF LIABILITY OR INCIDENTAL OR CONSEQUENTIAL
                    DAMAGES, OR IF YOU ACCESS THE WEBSITE SOLELY THROUGH AN
                    ARRANGEMENT WITH YOUR EMPLOYER OR PLAN SPONSOR, SOME OR ALL
                    OF THESE LIMITATIONS AND EXCLUSIONS MAY NOT APPLY TO YOU.
                  </p>
                </article>
              </li>
              <li>
                <article>
                  <h2>Broker-Dealer's Potential Conflicts</h2>
                  <p>
                    As a broker-dealer, Nature Corp Investments, Inc. and/or its
                    affiliates (including any entities that are "affiliates" as
                    that term is defined in the Investment Company Act of 1940)
                    may act as a principal for its own account or as agent for
                    its customers in connection with the sale to you or purchase
                    by you of a security that is the subject of content prepared
                    by Nature Corp. If it receives a mark-up or commission or
                    acts as agent for another person in connection with any such
                    transaction, Nature Corp may have a potential conflict of
                    interest. You understand this potential conflict and
                    acknowledge that you may choose to effect securities
                    transactions at another broker-dealer.
                  </p>
                </article>
              </li>
              <li>
                <article>
                  <h2>Timeliness of Content</h2>
                  <p>
                    All content on this Website is presented only as of the date
                    published or indicated, and may be superseded by subsequent
                    market events or for other reasons. In addition, you are
                    responsible for setting the cache settings on your browser
                    to ensure you are receiving the most recent data.
                  </p>
                </article>
              </li>
              <li>
                <article>
                  <h2>Prohibited Uses</h2>
                  <p>
                    Except as otherwise stated in these Terms or as expressly
                    authorized by Nature Corp in writing, you may not:
                  </p>
                  <p>
                    * Use this Website in any manner that could damage or
                    overburden any Nature Corp server, or any network connected
                    to any Nature Corp server, as all servers have limited
                    capacity and are used by many people;
                  </p>
                  <p>
                    * Use this Website in any manner that would interfere with
                    another party's use of the Website;
                  </p>
                  <p>
                    * Include the term "Nature Corp," or any Nature Corp’s
                    trademark or executive's name, or any variation of the
                    foregoing, as a meta-tag, hidden textual element;
                  </p>
                  <p>
                    * Use any robot, spider, intelligent agent, other automatic
                    device, or manual process to search, monitor or copy this
                    Website or the reports, data, information, content,
                    software, products services, or other materials on,
                    generated by or obtained from this Website, whether through
                    links or otherwise (collectively, "Materials"), without
                    Nature Corp’s permission, provided that generally available
                    third-party web browsers may be used without such
                    permission; or
                  </p>
                  <p>
                    * Use this Website or the Materials in any manner that could
                    create impression of affiliation, sponsorship or endorsement
                    by Nature Corp.
                  </p>
                </article>
              </li>
              <li>
                <article>
                  <h2>Password Security and Notification</h2>
                  <p>
                    Certain parts of the Website are protected by passwords or
                    require a login and are restricted to authorized users only.
                    You may not obtain unauthorized access to such parts of the
                    Website, or to any other protected materials or information,
                    through any means not intentionally made available by Nature
                    Corp for your specific use. If you have a Personal
                    Identification Number (PIN) for access to non-public areas
                    of the Website, you are solely responsible for all
                    activities that occur in connection with your PIN.
                    Accordingly, you should take all reasonable steps to protect
                    the confidentiality of your PIN. Notify Nature Corp
                    immediately if you become aware of any disclosure, loss,
                    theft or unauthorized use of your PIN.
                  </p>
                </article>
              </li>
              <li>
                <article>
                  <h2>Unauthorized Use of Content</h2>
                  <p>
                    You agree to defend, indemnify and hold harmless Nature
                    Corp, its affiliates and each of their respective officers,
                    directors, members, partners, managers and employees against
                    any losses, damages, claims, liabilities and costs
                    (including reasonable attorneys’ fees) to the extent
                    resulting from or arising out of any unauthorized or
                    otherwise inappropriate use of any of the content of this
                    Website attributable to you or which occurs through the use
                    of your ID.
                  </p>
                </article>
              </li>
              <li>
                <article>
                  <h2>System Outages and Incomplete Transmissions</h2>
                  <p>
                    Internet software or transmission problems may produce
                    inaccurate or incomplete copies of information and materials
                    that may be downloaded and displayed on a user's computer.
                    Nature Corp is not liable for any damages, changes, or
                    omissions that occur during transmission of information and
                    materials.
                  </p>
                </article>
              </li>

              <li>
                <article>
                  <h2>Termination</h2>
                  <p>
                    Nature Corp may terminate your access to the Website for any
                    reason, without prior notice.
                  </p>
                </article>
              </li>

              <li>
                <article>
                  <h2>Waiver</h2>
                  <p>
                    No waiver by Nature Corp of any right under or term or
                    provision of these Terms will be deemed a waiver of any
                    other right, term, or provision of these Terms at the time
                    of such waiver or a waiver of that or any other right, term,
                    or provision of these Terms at any other time.
                  </p>
                </article>
              </li>
              <li>
                <article>
                  <h2>Integration and Severability</h2>
                  <p>
                    If any provision of these Terms is deemed unlawful, void, or
                    for any reason unenforceable, then that provision will be
                    deemed severable from these Terms and will not affect the
                    validity and enforceability of the remaining provisions.
                  </p>
                  <p>
                    The preceding Terms of use represent the entire agreement
                    between Nature Corp and the user relating to the subject
                    matter herein.
                  </p>
                  <p>
                    Nature Corp is an equal opportunity employer committed to
                    diversity in the workplace.
                  </p>
                </article>
              </li>
              <li>
                <article>
                  <h2>Nature Corp PPIP, L.P. - Luxury Expense Policy</h2>
                  <p>
                    With respect to payment of expenses of Nature Corp PPIP,
                    L.P. (the "Fund"), the Fund will only pay or be charged with
                    expenses as authorized in its Amended and Restated Limited
                    Partnership Agreement. Moreover, in accordance with 31 CFR
                    30.12, under no circumstances will the Fund be charged or
                    pay any expenses related to travel, lodging, entertainment,
                    business meals, transportation, personal telecommunications
                    or meetings or events.
                  </p>
                </article>
              </li>

              {/* <li>
                <article></article>
              </li> */}
            </ul>
            <br></br>
            <p>
              Dated: July 2013. © 2016 Nature Corp, Inc. All rights reserved.
              NATURE CORP, NATURE CORP SOLUTIONS, ALADDIN, iSHARES, LIFEPATH, SO
              WHAT DO I DO WITH MY MONEY, INVESTING FOR A NEW WORLD, and BUILT
              FOR THESE TIMES are registered and unregistered trademarks of
              Nature Corp, Inc. or its subsidiaries in the United States and
              elsewhere. All other trademarks are those of their respective
              owners.
            </p>
            <p>
              As a global investment manager and fiduciary to our clients, our
              purpose at Nature Corp is to help everyone experience financial
              well-being. Since 1999, we've been a leading provider of financial
              technology, and our clients turn to us for the solutions they need
              when planning for their most important goals.
            </p>
            <br></br>
          </article>
          <footer className='termsFooter'>
            <div className='termFooterTop'>
              <p>Follow us</p>
              <br></br>
              <section className='termsFooterLogoWrapper'>
                <span className='termsFooterIcons'>
                  <AiOutlineTwitter></AiOutlineTwitter>
                </span>
                <span className='termsFooterIcons'>
                  <FaFacebookF></FaFacebookF>
                </span>
                <span className='termsFooterIcons'>
                  <GrLinkedinOption></GrLinkedinOption>
                </span>
                <span className='termsFooterIcons'>
                  <AiOutlineInstagram></AiOutlineInstagram>
                </span>
              </section>
            </div>
            <br></br>
            <section className='termFooterBottom'>
              <p>Designed by JBUIT</p>
              <p>Copyright © 2021 Naturecorp</p>
              <p>Built by JBUIT</p>
            </section>
          </footer>
        </section>
      </main>
    </div>
  );
}

export default terms;
