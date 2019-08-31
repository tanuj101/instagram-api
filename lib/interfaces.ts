export interface PostData {
    dimensions: any;
    imageURL: any;
    likes: any;
    comments: any;
    url: string;
    imageThumbnail: any;
}

export interface UserInfo extends EdgeData {
    biography: string
    blocked_by_viewer: boolean
    business_category_name: null
    connected_fb_page: null
    country_block: boolean
    external_url: string
    external_url_linkshimmed: string
    followed_by_viewer: boolean
    follows_viewer: boolean
    full_name: string
    has_blocked_viewer: boolean
    has_channel: boolean
    has_requested_viewer: boolean
    highlight_reel_count: 3
    id: string
    is_business_account: boolean
    is_joined_recently: boolean
    is_private: boolean
    is_verified: boolean
    profile_pic_url: string
    profile_pic_url_hd: string
    requested_by_viewer: boolean
    username: string
}

interface EdgeData {
    edge_felix_combined_draft_uploads: {
        count: number
        edges: []
        page_info: { has_next_page: boolean, end_cursor: null }
    }
    edge_felix_combined_post_uploads: {
        count: number
        edges: []
        page_info: { has_next_page: boolean, end_cursor: null }
    }
    edge_felix_drafts: {
        count: number
        edges: []
        page_info: { has_next_page: boolean, end_cursor: null }
    }
    edge_felix_pending_draft_uploads: {
        count: number
        edges: []
        page_info: { has_next_page: boolean, end_cursor: null }
    }
    edge_felix_pending_post_uploads: {
        count: number
        edges: []
        page_info: {
            end_cursor: null
            has_next_page: boolean
        }
    }
    edge_felix_video_timeline: {
        count: number
        edges: []
        page_info: {
            end_cursor: null
            has_next_page: boolean
        }
    }
    edge_follow: {
        count: number
    }
    edge_followed_by: {
        count: number
    }
    edge_media_collections: {
        count: number
        edges: []
        page_info: { has_next_page: boolean, end_cursor: null }
    }
    edge_mutual_followed_by: {
        count: number
        edges: []
    }
    edge_owner_to_timeline_media: {
        count: number
        edges: Array<{
            node: {
                comments_disabled: boolean
                dimensions: { height: number, width: number }
                display_url: string
                edge_liked_by: { count: number }
                edge_media_preview_like: { count: number }
                edge_media_to_caption: {
                    edges: Array<{
                        node: {
                            text: string
                        }
                    }>
                }
                edge_media_to_comment: { count: number }
                felix_profile_grid_crop: null
                gating_info: null
                id: string
                is_video: boolean
                location: null
                media_preview: string
                owner: { id: string, username: string }
                shortcode: string
                taken_at_timestamp: number
                thumbnail_resources: Array<{
                    config_height: number
                    config_width: number
                    src: string
                }>
                thumbnail_src: string
                video_view_count: number
                __typename: string
            }
        }>
        page_info: {
            end_cursor: string
            has_next_page: boolean
        }
    }
    edge_saved_media: {
        count: number
        edges: {
            node: {
                accessibility_caption: string
                comments_disabled: boolean
                dimensions: { height: number, width: number }
                display_url: string
                edge_liked_by: { count: number }
                edge_media_preview_like: { count: number }
                edge_media_to_caption: {
                    edges: Array<{
                        node: {
                            text: string;
                        }
                    }>
                }
                edge_media_to_comment: { count: number }
                gating_info: null
                id: string
                is_video: boolean
                location: null
                media_preview: null
                owner: { id: string, username: string }
                shortcode: string
                taken_at_timestamp: number
                thumbnail_resources: {
                    config_height: number
                    config_width: number
                    src: string
                }[]
                thumbnail_src: string
                __typename: string
            }
        }[]
        page_info: {
            end_cursor: string
            has_next_page: boolean
        }
    }
}