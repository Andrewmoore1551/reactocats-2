import React from 'react'
export class Octocat extends React.Component {
  render() {
    return (
      <article>
        <a href={this.props.href}>
          <img
            src={this.props.src}
            width="400"
            height="400"
            alt={this.props.name}
            className="bigimg"
          />
        </a>
        <ul>
          <li>
            #143:
            <a href={this.props.href}>
              <strong>{this.props.name}</strong>
            </a>
          </li>
          <li>
            <a href={this.props.littlehref}>
              <img
                src={this.props.littlesrc}
                width="24px"
                height="24px"
                alt={this.props.littlealt}
                className="littleimg"
              />
            </a>
          </li>
        </ul>
      </article>
    )
  }
}
