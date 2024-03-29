import React from 'react';
import _ from 'lodash';

import {safePrefix, markdownify} from '../utils';
import CtaButtons from './CtaButtons';

export default class SectionContent extends React.Component {
    render() {
        let section = _.get(this.props, 'section');
        return (
            <section id={_.get(section, 'section_id')} data-sal="" name={_.get(section, 'section_id')} className={'block text-block bg-' + _.get(section, 'background') + ' outer'}>
              <div className="inner">
                <div className="grid">
                  {_.get(section, 'image') && 
                  <div className="cell block-preview">
                    <img src={safePrefix(_.get(section, 'image') + '?auto=format&q=65')} alt={_.get(section, 'title')}  loading="lazy"/>
                  </div>
                  }
                  <div className="cell block-content"  data-sal="slide-up" data-sal-delay="150">
                     {_.get(section, 'titulo_em_imagem') ?
                    <img src={safePrefix(_.get(section, 'titulo_em_imagem') + '?auto=format&q=65')} alt={_.get(section, 'title')} className="title-image" loading="lazy" />
                    :
                    <h2 className="block-title">{_.get(section, 'title')}</h2>
                    }
                    <div className="block-copy">
                      {markdownify(_.get(section, 'content'))}
                    </div>
                    {_.get(section, 'actions') && 
                      <CtaButtons {...this.props} actions={_.get(section, 'actions')} />
                    }
                  </div>
                </div>
              </div>
            </section>
        );
    }
}
