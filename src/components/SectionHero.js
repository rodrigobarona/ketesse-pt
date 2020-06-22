import React from 'react';
import _ from 'lodash';

import {safePrefix, markdownify} from '../utils';
import ActionLink from './ActionLink';

export default class SectionHero extends React.Component {
    render() {
        let section = _.get(this.props, 'section');
        return (
            <section id={_.get(section, 'section_id')}  name={_.get(section, 'section_id')} className="block hero-block bg-accent outer" 
                {_.get(section, 'image') && 
                   style="background-image: linear-gradient(rgba(138, 83, 149, 0.8), rgba(138, 83, 149, 0.8)), url({safePrefix(_.get(section, 'image'))});"
                }
                 >
              <div className="inner">
                <div className="grid">
                  

                  <div className="cell block-content">
                    {_.get(section, 'title_image') ?
                      <img src={safePrefix(_.get(section, 'title_image'))} alt={_.get(section, 'title')} />
                      :
                      <h1 className="block-title">{_.get(section, 'title')}</h1>
                      }
                    <div className="block-copy">
                      {markdownify(_.get(section, 'content'))}
                    </div>
                    {_.get(section, 'actions') && 
                    <p className="block-buttons">
                      {_.map(_.get(section, 'actions'), (action, action_idx) => (
                        <ActionLink key={action_idx} {...this.props} action={action} class_names={'button white large'} />
                      ))}
                    </p>
                    }
                  </div>
                </div>
              </div>
            </section>
        );
    }
}
