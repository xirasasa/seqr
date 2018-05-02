import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Grid, Icon, Header } from 'semantic-ui-react'
import PedigreeImagePanel from 'shared/components/panel/view-pedigree-image/PedigreeImagePanel'
import OptionFieldView from 'shared/components/panel/view-fields/OptionFieldView'
import TextFieldView from 'shared/components/panel/view-fields/TextFieldView'
import ListFieldView from 'shared/components/panel/view-fields/ListFieldView'
import { FAMILY_ANALYSIS_STATUS_LOOKUP, FAMILY_ANALYSIS_STATUS_OPTIONS } from 'shared/utils/constants'

import { updateFamily } from 'redux/rootReducer'
import { getShowDetails, getProject } from '../../reducers'


const FamilyRow = (props) => {
  const familyAnalysisStatus = (
    (props.family.analysisStatus && FAMILY_ANALYSIS_STATUS_LOOKUP[props.family.analysisStatus]) ?
      FAMILY_ANALYSIS_STATUS_LOOKUP[props.family.analysisStatus] :
      {}
  )
  console.log(familyAnalysisStatus)

  const familyRow = (
    <Grid stackable style={{ width: '100%' }}>
      <Grid.Row style={{ paddingTop: '20px', paddingRight: '10px' }}>
        <Grid.Column width={3} style={{ maxWidth: '250px' }}>
          <Header size="small">
            Family: {props.family.displayName}
          </Header>
          <PedigreeImagePanel family={props.family} />
        </Grid.Column>

        <Grid.Column width={10} style={{ maxWidth: '950px' }}>
          <TextFieldView
            isVisible={props.showDetails}
            isEditable={props.project.canEdit && !props.showInternalFields}
            fieldName="Family Description"
            fieldId="description"
            initialValues={props.family}
            textEditorId={`editDescriptions-${props.family.familyGuid}`}
            textEditorTitle={`Description for Family ${props.family.displayName}`}
            textEditorSubmit={props.updateFamily}
          />
          <OptionFieldView
            isEditable={props.project.canEdit && !props.showInternalFields}
            fieldName="Analysis Status"
            field="analysisStatus"
            idField="familyGuid"
            initialValues={props.family}
            modalTitle={`Anlysis Status for Family ${props.family.displayName}`}
            onSubmit={props.updateFamily}
            tagOptions={FAMILY_ANALYSIS_STATUS_OPTIONS}
            tagAnnotation={value => <Icon name="play" style={{ color: value.color }} />}
          />
          <ListFieldView
            isVisible={props.showDetails}
            isEditable={props.project.canEdit && !props.showInternalFields}
            fieldName="Analysed By"
            values={props.family.analysedBy.map(analysedBy => `${analysedBy.user.display_name} (${analysedBy.date_saved})`)}
            onAddItem={() => props.updateFamily({ familyField: 'analysed_by' })}
            confirmAddMessage="Are you sure you want to add that you analysed this family?"
          />
          <TextFieldView
            isVisible={props.showDetails}
            isEditable={props.project.canEdit && !props.showInternalFields}
            fieldName="Analysis Notes"
            fieldId="analysisNotes"
            initialValues={props.family}
            textEditorId={`editAnalysisNotes-${props.family.familyGuid}`}
            textEditorTitle={`Analysis Notes for Family ${props.family.displayName}`}
            textEditorSubmit={props.updateFamily}
          />
          <TextFieldView
            isVisible={props.showDetails}
            isEditable={props.project.canEdit && !props.showInternalFields}
            fieldName="Analysis Summary"
            fieldId="analysisSummary"
            initialValues={props.family}
            textEditorId={`editAnalysisSummary-${props.family.familyGuid}`}
            textEditorTitle={`Analysis Summary for Family ${props.family.displayName}`}
            textEditorSubmit={props.updateFamily}
          />
          <TextFieldView
            isPrivate
            isVisible={props.showInternalFields || false}
            isEditable={props.project.canEdit}
            fieldName="Internal Notes"
            fieldId="internalCaseReviewNotes"
            initialValues={props.family}
            textEditorId={`editInternalNotes-${props.family.familyGuid}`}
            textEditorTitle={`Internal Notes for Family ${props.family.displayName}`}
            textEditorSubmit={props.updateFamily}
          />
          <TextFieldView
            isPrivate
            isVisible={props.showInternalFields || false}
            isEditable={props.project.canEdit}
            fieldName="Internal Summary"
            fieldId="internalCaseReviewSummary"
            initialValues={props.family}
            textEditorId={`editInternalSummary-${props.family.familyGuid}`}
            textEditorTitle={`Internal Summary for Family ${props.family.displayName}`}
            textEditorSubmit={props.updateFamily}
          />
          <br />
        </Grid.Column>
        {!props.showInternalFields &&
          <Grid.Column width={3}>
            <a
              style={{ display: 'block', padding: '5px 0px' }}
              href={`/project/${props.project.deprecatedProjectId}/family/${props.family.familyId}`}
            >
              Original Family Page
            </a>
            <a
              style={{ display: 'block', padding: '5px 0px' }}
              href={`/project/${props.project.deprecatedProjectId}/family/${props.family.familyId}/mendelian-variant-search`}
            >
              <Icon name="search" />Variant Search
            </a>
            {/*
            <a style={{ display: 'block', padding: '5px 0px' }}
              href={computeVariantSearchUrl(props.project.projectGuid, props.family.familyGuid)}
            >
              <Icon name="search" />Variant Search
            </a>
            */}
            {
              props.project.isMmeEnabled &&
              <a
                style={{ display: 'block', padding: '5px 0px' }}
                href={`/matchmaker/search/project/${props.project.deprecatedProjectId}/family/${props.family.familyId}`}
              >
                <Icon name="search" />Match Maker Exchange
              </a>
            }
          </Grid.Column>
        }
      </Grid.Row>
    </Grid>)

  return familyRow
}

export { FamilyRow as FamilyRowComponent }

FamilyRow.propTypes = {
  project: PropTypes.object.isRequired,
  family: PropTypes.object.isRequired,
  showDetails: PropTypes.bool.isRequired,
  showInternalFields: PropTypes.bool,
}


const mapStateToProps = state => ({
  project: getProject(state),
  showDetails: getShowDetails(state),
})

const mapDispatchToProps = {
  updateFamily,
}

export default connect(mapStateToProps, mapDispatchToProps)(FamilyRow)
