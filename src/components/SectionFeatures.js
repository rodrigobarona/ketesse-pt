import React from 'react';
import _ from 'lodash';

import {htmlToReact, safePrefix, markdownify} from '../utils';
import CtaButtons from './CtaButtons';

export default class SectionFeatures extends React.Component {
    render() {
        let section = _.get(this.props, 'section');
        return (
            <section id={_.get(section, 'section_id')}  name={_.get(section, 'section_id')} className={'block features-block bg-' + _.get(section, 'background') + ' outer'}>
              <div className="block-header inner-large">
                {_.get(section, 'title') && 
                <h2 className="block-title">{_.get(section, 'title')}</h2>
                }
                {_.get(section, 'subtitle') && 
                <p className="block-subtitle">
                  {htmlToReact(_.get(section, 'subtitle'))}
                </p>
                }
              </div>
              {_.get(section, 'features') && 
              <div className="inner">
                {_.map(_.get(section, 'features'), (feature, feature_idx) => (
                <div key={feature_idx} className="block-item">
                  <div className="grid">
                    {_.get(feature, 'image') && 
                    <div className="cell block-preview">
                      <img src={safePrefix(_.get(feature, 'image') + '?auto=format&q=65')} alt={_.get(feature, 'title')} />
                    </div>
                    }
                    <div className="cell block-content"  data-sal="slide-up" data-sal-delay="150">
                      {_.get(feature, 'titulo_em_imagem') ?
                      <img src={safePrefix(_.get(feature, 'titulo_em_imagem') + '?auto=format&q=65')} alt={_.get(feature, 'title')} className="title-image"  />
                      :
                      <h3 className="block-title">{_.get(feature, 'title')}</h3>
                      }
                      <div className="block-copy">
                        {markdownify(_.get(feature, 'content'))}
                      </div>
                      {_.get(feature, 'actions') && 
                        <CtaButtons {...this.props} actions={_.get(feature, 'actions')} />
                      }
                    </div>
                  </div>
                </div>
                ))}
                </div>
              }
            </section>
        );
    }
}
