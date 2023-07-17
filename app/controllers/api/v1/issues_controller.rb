# frozen_string_literal: true

class Api::V1::IssuesController < ApplicationController
  before_action :fetch_issue, only: %i[show update destroy]

  def search
    @issues = search_query
    render
  end

  def index
    @issues = Issue.all.group_by(&:board)
    render
  end

  def show
    render
  end

  def create
    @issue = Issue.create!(issue_params)
    render_notice(t("successfully_created", entity: "Issue"))
  end

  def update
    binding.pry
    @issue.update!(issue_params)
    render_notice(t("successfully_updated", entity: "Issue"))
  end

  def destroy
    @issue.destroy
    render_notice(t("successfully_deleted", entity: "Issue"))
  end

  private

    def issue_params
      params.require(:issue).permit(:summary, :description, :issue_type, :priority, :board)
    end

    def search_query
      Issue.ransack(summary_or_description_cont: params[:search]).result.distinct
    end

    def fetch_issue
      @issue = Issue.find_by(id: params[:id])
    end
end
