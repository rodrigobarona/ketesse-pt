import React from 'react';
import _ from 'lodash';

import {htmlToReact, safePrefix} from '../utils';

export default class SectionReviews extends React.Component {
    render() {
        let section = _.get(this.props, 'section');
        return (
            <section id={_.get(section, 'section_id')} name={_.get(section, 'section_id')} className={'block reviews-block bg-' + _.get(section, 'background') + ' outer'}>
              <div className="block-header inner-small">
               {_.get(section, 'titulo_em_imagem') ?
                  <img src={safePrefix(_.get(section, 'titulo_em_imagem'))} alt={_.get(section, 'title')} className="title-image"  />
                  :
                <h2 className="block-title">{_.get(section, 'title')}</h2>
                }
                {_.get(section, 'subtitle') && 
                <p className="block-subtitle">
                  {htmlToReact(_.get(section, 'subtitle'))}
                </p>
                }
              </div>
              {_.get(section, 'reviews') && 
              <div className="inner">
                <div className="grid">
                  {_.map(_.get(section, 'reviews'), (review, review_idx) => (
                  <blockquote key={review_idx} className="cell review">
                    <div className="review-inside">
                      {_.get(review, 'avatar') && 
                        <img className="review-avatar" src={safePrefix(_.get(review, 'avatar'))} alt="Author avatar"/>
                        }
                      <footer className="review-footer">
                        <h2 className="review-author">{_.get(review, 'tipo_dor')}</h2>
                      </footer>
                    </div>
                  </blockquote>
                  ))}
                </div>
              </div>
              }
            </section>
        );
    }
}
