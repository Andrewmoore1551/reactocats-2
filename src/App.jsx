import { format } from 'prettier'
import React, { Component } from 'react'
import { Octocat } from './components/Octocat'

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <a href="#">
                  <img
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                    width="45rem"
                    height="45rem"
                    alt="GithubLogo"
                  />
                </a>
              </li>
              <li>
                <a href="#">Octodex</a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="https://octodex.github.com/faq/">FAQ</a>
              </li>
            </ul>
          </nav>

          <nav>
            <ul>
              <li>
                <a href="https://twitter.com/githubdesign">
                  Follow us on Twitter
                </a>
              </li>
              <li>
                <a href="https://github.com/" className="git">
                  Back to GitHub.com
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Octocat
            href="https://octodex.github.com//terracottocat/"
            src="https://octodex.github.com//images/Terracottocat_Single.png"
            name="Terracottocat"
            number="149"
            littlehref="https://github.com/chubbmo"
            littlesrc="https://github.com/chubbmo.png"
            littlealt="chubbmo"
          />

          <Octocat
            href="https://octodex.github.com//octogatos/"
            src="https://octodex.github.com//images/Octogatos.png"
            name="Octogatos"
            number="148"
            littlehref="https://github.com/cameronfoxly"
            littlesrc="https://github.com/cameronfoxly.png"
            littlealt="cameronfoxly"
          />

          <Octocat
            href="https://octodex.github.com//sentrytocat/"
            src="https://octodex.github.com//images/Sentrytocat_octodex.jpg"
            name="Sentrytocat"
            number="143"
            littlehref="https://github.com/cameronmcefee"
            littlesrc="https://github.com/cameronmcefee.png"
            littlealt="cameronfoxly"
          />

          <Octocat
            href="https://octodex.github.com//boxertocat/"
            src="https://octodex.github.com//images/boxertocat_octodex.jpg"
            name="Boxertocat"
            number="141"
            littlehref="https://github.com/rubyjazzy"
            littlesrc="https://github.com/rubyjazzy.png"
            littlealt="rubyjazzy"
          />

          <Octocat
            href="https://octodex.github.com//suftocat/"
            src="https://octodex.github.com//images/surftocat.png"
            name="Surftocat"
            number="140"
            littlehref="https://github.com/jeejkang"
            littlesrc="https://github.com/jeejkang.png"
            littlealt="jeejkang"
          />

          <Octocat
            href="https://octodex.github.com//scubatocat/"
            src="https://octodex.github.com//images/scubatocat.png"
            name="Scubatocat"
            number="138"
            littlehref="https://github.com/cameronfoxly"
            littlesrc="https://github.com/cameronfoxly.png"
            littlealt="Scubatocat"
          />

          <Octocat
            href="https://octodex.github.com//dinotocat/"
            src="https://octodex.github.com//images/dinotocat.png"
            name="Dinotocat"
            number="130"
            littlehref="https://github.com/kimestoesta"
            littlesrc="https://github.com/kimestoesta.png"
            littlealt="kimestoesta"
          />

          <Octocat
            href="https://octodex.github.com//spidertocat/"
            src="https://octodex.github.com//images/spidertocat.png"
            name="Spidertocat"
            number="88"
            littlehref="https://github.com/jeejkang"
            littlesrc="https://github.com/jeejkang.png"
            littlealt="jeejkang"
          />
        </main>
        <footer>
          <div>
            <p>© 2013 – 2020 GitHub, Inc. All rights reserved.</p>
          </div>
        </footer>
      </div>
    )
  }
}
export default App
