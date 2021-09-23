//* React
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

import vaccinationStatus from '../context/vaccinationStatus';

import { PieChart } from 'react-minimal-pie-chart';

//* CSS
import './css/Institute.scss';

const Institute = () => {
	// const params = useParams();
	const org = {
		id: '1234',
		name: 'National Institute of Technology, Silchar',
		email: 'director@org1.com',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut felis finibus, tincidunt nibh egestas, lobortis elit. Sed tellus libero, faucibus finibus urna eget, lobortis scelerisque quam. Ut fermentum augue in enim interdum eleifend. Donec lorem tellus, finibus quis neque blandit, auctor sagittis metus. Praesent lacus elit, consequat non mauris vitae, lobortis rhoncus quam. Nulla non felis aliquet, venenatis lacus vel, molestie dolor. Nunc eget libero vel lacus fermentum tempus. Nunc bibendum nisi in felis dictum tincidunt.',
		crew: ['123', '456', '789', '135'],
		img: '/img/insti1234.jpg',
		status: [1, 2, 1],
	};

	const users = [
		{
			id: '123',
			name: 'User1',
			designation: 'Director',
			img: 'https://lh3.googleusercontent.com/pw/AM-JKLX0vd9Yl2LyvRpvgpdN5jLFbQgkn2bGdZ9dCzb2kbSAUGg78c3S6MqyccIaEg48Cz5q77DsKIuLbyhdLk0Sg5yzVO6Ohgnth1VKlN4-cKuewTazq9U-wPoGu8QafcdH3YH5E8H11UBHU4x6ouyuexkj=s225-no',
			organisation: {
				id: '1234',
			},
			vaccinationStatus: 2,
		},
		{
			id: '456',
			name: 'User2',
			designation: 'Assisstant Professor',
			img: 'https://lh3.googleusercontent.com/pw/AM-JKLX0vd9Yl2LyvRpvgpdN5jLFbQgkn2bGdZ9dCzb2kbSAUGg78c3S6MqyccIaEg48Cz5q77DsKIuLbyhdLk0Sg5yzVO6Ohgnth1VKlN4-cKuewTazq9U-wPoGu8QafcdH3YH5E8H11UBHU4x6ouyuexkj=s225-no',
			organisation: {
				id: '1234',
			},
			vaccinationStatus: 1,
		},
		{
			id: '325',
			name: 'User3',
			designation: 'Student',
			img: 'https://lh3.googleusercontent.com/pw/AM-JKLX0vd9Yl2LyvRpvgpdN5jLFbQgkn2bGdZ9dCzb2kbSAUGg78c3S6MqyccIaEg48Cz5q77DsKIuLbyhdLk0Sg5yzVO6Ohgnth1VKlN4-cKuewTazq9U-wPoGu8QafcdH3YH5E8H11UBHU4x6ouyuexkj=s225-no',
			organisation: {
				id: '7945',
			},
			vaccinationStatus: 1,
		},
		{
			id: '841',
			name: 'User4',
			designation: 'Student',
			img: 'https://lh3.googleusercontent.com/pw/AM-JKLX0vd9Yl2LyvRpvgpdN5jLFbQgkn2bGdZ9dCzb2kbSAUGg78c3S6MqyccIaEg48Cz5q77DsKIuLbyhdLk0Sg5yzVO6Ohgnth1VKlN4-cKuewTazq9U-wPoGu8QafcdH3YH5E8H11UBHU4x6ouyuexkj=s225-no',
			organisation: {
				id: '5113',
			},
			vaccinationStatus: 0,
		},
		{
			id: '789',
			name: 'User5',
			designation: 'Student',
			img: 'https://lh3.googleusercontent.com/pw/AM-JKLX0vd9Yl2LyvRpvgpdN5jLFbQgkn2bGdZ9dCzb2kbSAUGg78c3S6MqyccIaEg48Cz5q77DsKIuLbyhdLk0Sg5yzVO6Ohgnth1VKlN4-cKuewTazq9U-wPoGu8QafcdH3YH5E8H11UBHU4x6ouyuexkj=s225-no',
			organisation: {
				id: '1234',
			},
			vaccinationStatus: 0,
		},
		{
			id: '135',
			name: 'User6',
			designation: 'Student',
			img: 'https://lh3.googleusercontent.com/pw/AM-JKLX0vd9Yl2LyvRpvgpdN5jLFbQgkn2bGdZ9dCzb2kbSAUGg78c3S6MqyccIaEg48Cz5q77DsKIuLbyhdLk0Sg5yzVO6Ohgnth1VKlN4-cKuewTazq9U-wPoGu8QafcdH3YH5E8H11UBHU4x6ouyuexkj=s225-no',
			organisation: {
				id: '1234',
			},
			vaccinationStatus: 1,
		},
	];

	const history = useHistory();

	//* Set Title
	useEffect(() => {
		document.title = org.name + ' | CoLive-21';
	}, [org.name]);

	return (
		<main className='insti'>
			<h3 className='insti-name'>{org && org.name}</h3>
			<div className='insti-info'>
				<div className='info-left'>
					<img src={org && org.img} alt={org && org.name} />
				</div>
				<div className='info-right'>
					<div className='description'>{org && org.description}</div>
					<div className='members-count'>Members: {org && org.crew.length}</div>
				</div>
			</div>

			<div className='heading'>Stats</div>
			<div className='chart'>
				<div className='pie-chart'>
					<PieChart
						data={[
							{
								title: vaccinationStatus[0],
								value: org.status[0],
								color: 'var(--theme-2-100)',
							},
							{
								title: vaccinationStatus[1],
								value: org.status[1],
								color: 'var(--theme-3-100)',
							},
							{
								title: vaccinationStatus[2],
								value: org.status[2],
								color: 'var(--theme-4-100)',
							},
						]}
						animate={true}
						startAngle={-30}
					/>
				</div>
				<div className='legend'>
					<div className='legend-itm'>
						<div
							className='legend-color'
							style={{ backgroundColor: 'var(--theme-4-100)' }}></div>
						<div className='legend-label'>
							{vaccinationStatus[2]} - {org.status[2]}
						</div>
					</div>
					<div className='legend-itm'>
						<div
							className='legend-color'
							style={{ backgroundColor: 'var(--theme-3-100)' }}></div>
						<div className='legend-label'>
							{vaccinationStatus[1]} - {org.status[1]}
						</div>
					</div>
					<div className='legend-itm'>
						<div
							className='legend-color'
							style={{ backgroundColor: 'var(--theme-2-100)' }}></div>
						<div className='legend-label'>
							{vaccinationStatus[0]} - {org.status[0]}
						</div>
					</div>
				</div>
			</div>

			<div className='heading'>Members</div>
			<div className='members'>
				{users &&
					users.map(user => {
						if (user.organisation.id === org.id)
							return (
								<div
									key={user.id}
									className='member-card'
									onClick={() => history.push(`/user/${user.id}`)}>
									<div className='member-pic'>
										<img src={user.img} alt={user.name} />
									</div>
									<div className='member-info'>
										<div className='user-name'>{user.name}</div>
										<div className='user-designation'>{user.designation}</div>
										<div className='user-vac-status'>
											{vaccinationStatus[user.vaccinationStatus]}
										</div>
									</div>
								</div>
							);
						else return false;
					})}
			</div>
		</main>
	);
};

export default Institute;