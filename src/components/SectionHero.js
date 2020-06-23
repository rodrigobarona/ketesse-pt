import React from 'react';
import _ from 'lodash';

import {safePrefix, markdownify} from '../utils';
import ActionLink from './ActionLink';

export default class SectionHero extends React.Component {
    render() {
        let section = _.get(this.props, 'section');
        const bgimage = {
          background: 'linear-gradient(rgba(138, 83, 149, 0.6), rgba(138, 83, 149, 0.6)), url(' + _.get(section, 'image') + '?auto=format&q=45&fit=crop&w=1200)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        };

        return (
            <section id={_.get(section, 'section_id')}  name={_.get(section, 'section_id')} style={bgimage} className={'block hero-block bg-accent outer'}>
              <div className="inner">
                <div className="grid">
                  <div className="cell block-content"  data-sal="slide-up" data-sal-delay="150">
                    {_.get(section, 'title_image') ?
                      <img src={safePrefix(_.get(section, 'title_image') + '?auto=format&q=65')} alt={_.get(section, 'title')} className="title-image" loading="lazy" />
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
