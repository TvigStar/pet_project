import teamBackground from '../content/team_background.svg'

export const Team = () => {
    return (
        <div className='c_container'>
            <img src={teamBackground} alt='text' />

            <span className='team_text_box team_text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices,
                lorem dapibus pulvinar varius, nisi turpis aliquet dolor, at placerat turpis ligula in ante.
                Curabitur accumsan turpis non sagittis pulvinar.
            </span>
        </div>
)
}