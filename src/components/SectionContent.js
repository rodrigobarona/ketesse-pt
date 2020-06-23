import React from 'react';
import _ from 'lodash';

import {safePrefix, markdownify} from '../utils';
import CtaButtons from './CtaButtons';

export default class SectionContent extends React.Component {
    render() {
        let section = _.get(this.props, 'section');
        return (
            <section id={_.get(section, 'section_id')} name={_.get(section, 'section_id')} className={'block text-block bg-' + _.get(section, 'background') + ' outer'}>
              <div className="inner">
                <div className="grid">
                  {_.get(section, 'image') && 
                  <div className="cell block-preview">
                    <img src={safePrefix(_.get(section, 'image'))} alt={_.get(section, 'title')} />
                  </div>
                  }
                  <div className="cell block-content"  data-sal="slide-up" data-sal-delay="150">
                     {_.get(section, 'titulo_em_imagem') ?
                    <img src={safePrefix(_.get(section, 'titulo_em_imagem'))} alt={_.get(section, 'title')} className="title-image" />
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
