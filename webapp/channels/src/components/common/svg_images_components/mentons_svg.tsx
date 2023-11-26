// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {useIntl} from 'react-intl';

export function MentionsSVG(props: React.HTMLAttributes<HTMLSpanElement>) {
    const {formatMessage} = useIntl();
    return (
        <span {...props}>
            <svg
                width='16px'
                height='16px'
                viewBox='0 0 16 16'
                version='1.1'
                role='img'
                aria-label={formatMessage({id: 'generic_icons.mention', defaultMessage: 'Mention Icon'})}
                fill='inherit'
            >
                <ellipse
                    cx='8.30971'
                    cy='13.729'
                    rx='5.62581'
                    ry='0.309677'
                    fill='black'
                    fillOpacity='0.06'
                />
                <path
                    d='M7.2537 6.16993H13.3893C13.5018 6.16955 13.6132 6.19127 13.7172 6.23386C13.8213 6.27645 13.9159 6.33907 13.9956 6.41814C14.0754 6.49722 14.1388 6.5912 14.1822 6.69472C14.2256 6.79824 14.2481 6.90928 14.2485 7.02149V10.9128C14.2481 11.025 14.2256 11.136 14.1822 11.2396C14.1388 11.3431 14.0754 11.4371 13.9956 11.5161C13.9159 11.5952 13.8213 11.6578 13.7172 11.7004C13.6132 11.743 13.5018 11.7647 13.3893 11.7644H12.4838V13.221L11.1256 11.7644H7.25587C7.14343 11.7647 7.03201 11.743 6.92798 11.7004C6.82395 11.6578 6.72935 11.5952 6.64957 11.5161C6.56979 11.4371 6.5064 11.3431 6.46302 11.2396C6.41964 11.136 6.39711 11.025 6.39673 10.9128V7.02149C6.3975 6.79525 6.48815 6.57855 6.6488 6.41891C6.80945 6.25928 7.02698 6.16973 7.2537 6.16993V6.16993Z'
                    fill='#1E325C'
                />
                <path
                    d='M11.1256 11.7644H7.25591C7.14346 11.7647 7.03205 11.743 6.92802 11.7004C6.82399 11.6578 6.72939 11.5952 6.64961 11.5162C6.56983 11.4371 6.50644 11.3431 6.46306 11.2396C6.41968 11.1361 6.39716 11.025 6.39678 10.9128V8.55042C6.39678 8.55042 6.66697 10.735 6.71551 10.9273C6.76404 11.1196 6.86039 11.4073 7.31675 11.455C7.77312 11.5027 11.1256 11.7644 11.1256 11.7644Z'
                    fill='#14213E'
                />
                <path
                    d='M13.6117 7.79931C13.5493 7.5791 13.444 7.37337 13.3016 7.19397C13.1593 7.01457 12.9827 6.86505 12.7822 6.75401C12.7704 6.74802 12.7608 6.73826 12.7551 6.72627C12.7494 6.71429 12.7478 6.70074 12.7506 6.68776C12.7534 6.67478 12.7605 6.6631 12.7707 6.65455C12.7808 6.646 12.7936 6.64107 12.8069 6.64051C13.1937 6.61738 13.9746 6.69979 13.7298 7.79353C13.7272 7.80688 13.7202 7.81898 13.7099 7.82789C13.6996 7.8368 13.6866 7.842 13.673 7.84267C13.6594 7.84334 13.6459 7.83943 13.6348 7.83156C13.6237 7.8237 13.6156 7.81235 13.6117 7.79931V7.79931Z'
                    fill='#3C64B9'
                />
                <path
                    d='M11.1317 2.72889H3.32269C3.17958 2.7284 3.03778 2.75605 2.90538 2.81026C2.77298 2.86446 2.65257 2.94416 2.55104 3.0448C2.4495 3.14544 2.36882 3.26505 2.31361 3.39681C2.2584 3.52856 2.22973 3.66988 2.22925 3.81269V8.76526C2.22973 8.90807 2.2584 9.04939 2.31361 9.18115C2.36882 9.3129 2.4495 9.43251 2.55104 9.53315C2.65257 9.6338 2.77298 9.71349 2.90538 9.7677C3.03778 9.8219 3.17958 9.84955 3.32269 9.84907H4.47514V11.7029L6.20382 9.84907H11.1289C11.272 9.84955 11.4138 9.8219 11.5462 9.7677C11.6786 9.71349 11.799 9.6338 11.9006 9.53315C12.0021 9.43251 12.0828 9.3129 12.138 9.18115C12.1932 9.04939 12.2219 8.90807 12.2224 8.76526V3.81269C12.2214 3.52475 12.106 3.24895 11.9016 3.04578C11.6971 2.8426 11.4202 2.72864 11.1317 2.72889V2.72889Z'
                    fill='#1C58D9'
                />
                <path
                    d='M6.20386 9.84903H11.1289C11.2721 9.84952 11.4139 9.82186 11.5463 9.76766C11.6787 9.71346 11.7991 9.63376 11.9006 9.53312C12.0021 9.43248 12.0828 9.31286 12.138 9.18111C12.1932 9.04935 12.2219 8.90804 12.2224 8.76523V5.75854C12.2224 5.75854 11.8785 8.5389 11.8167 8.78363C11.755 9.02836 11.6323 9.39453 11.0515 9.45526C10.4707 9.51598 6.20386 9.84903 6.20386 9.84903Z'
                    fill='black'
                    fillOpacity='0.08'
                />
                <path
                    d='M3.03968 4.8027C3.11902 4.52243 3.25314 4.2606 3.43432 4.03227C3.61549 3.80395 3.84014 3.61364 4.09532 3.47232C4.11044 3.46469 4.12259 3.45228 4.12987 3.43702C4.13716 3.42176 4.13917 3.40453 4.13558 3.38801C4.132 3.37149 4.12302 3.35662 4.11007 3.34574C4.09711 3.33486 4.0809 3.32857 4.06397 3.32787C3.57165 3.29843 2.57778 3.40332 2.8894 4.79534C2.89268 4.81233 2.90159 4.82773 2.91469 4.83907C2.92779 4.85041 2.94432 4.85704 2.96164 4.85789C2.97896 4.85873 2.99607 4.85376 3.01022 4.84375C3.02437 4.83375 3.03474 4.81929 3.03968 4.8027V4.8027Z'
                    fill='white'
                    fillOpacity='0.16'
                />
                <path
                    d='M7.26631 6.91258C7.43613 6.91258 7.58688 6.84846 7.71858 6.72023C7.85027 6.58854 7.91612 6.43605 7.91612 6.26277C7.91612 6.08603 7.852 5.93354 7.72377 5.80531C7.59555 5.67708 7.44306 5.61297 7.26631 5.61297C7.09303 5.61297 6.94055 5.67882 6.80885 5.81051C6.68062 5.9422 6.61651 6.09296 6.61651 6.26277C6.61651 6.42912 6.68062 6.58161 6.80885 6.72023C6.94748 6.84846 7.09996 6.91258 7.26631 6.91258ZM7.26631 4.09503C7.85893 4.09503 8.36838 4.30817 8.79465 4.73444C9.22092 5.16071 9.43406 5.67015 9.43406 6.26277V6.57468C9.43406 6.78262 9.36128 6.96803 9.21572 7.13091C9.07017 7.273 8.88995 7.34405 8.67509 7.34405C8.41516 7.34405 8.20203 7.23661 8.03568 7.02174C7.82081 7.23661 7.56609 7.34405 7.27151 7.34405C6.97693 7.34405 6.72221 7.23661 6.50734 7.02174C6.29248 6.80688 6.18504 6.55389 6.18504 6.26277C6.18504 5.97166 6.29074 5.71521 6.50215 5.49341C6.71701 5.28547 6.97174 5.1815 7.26631 5.1815C7.56089 5.1815 7.81735 5.28547 8.03568 5.49341C8.24362 5.71174 8.34759 5.9682 8.34759 6.26277V6.57468C8.34759 6.66132 8.38051 6.7393 8.44636 6.80861C8.5122 6.87792 8.58845 6.91258 8.67509 6.91258C8.76519 6.91258 8.84144 6.87965 8.90382 6.81381C8.9662 6.74796 8.99739 6.66825 8.99739 6.57468V6.26277C8.99739 5.78452 8.82757 5.37731 8.48794 5.04114C8.15178 4.70151 7.74457 4.5317 7.26631 4.5317C6.78806 4.5317 6.37912 4.70151 6.03949 5.04114C5.70332 5.37731 5.53524 5.78452 5.53524 6.26277C5.53524 6.74103 5.70332 7.14997 6.03949 7.4896C6.37912 7.82577 6.78806 7.99385 7.26631 7.99385H8.34759V8.43052H7.26631C6.68062 8.43052 6.17291 8.21565 5.74318 7.78591C5.31344 7.35618 5.09857 6.84673 5.09857 6.25758C5.09857 5.66842 5.31344 5.16071 5.74318 4.73444C6.17291 4.30817 6.68062 4.09503 7.26631 4.09503Z'
                    fill='var(--center-channel-bg)'
                />
            </svg>

        </span>
    );
}
